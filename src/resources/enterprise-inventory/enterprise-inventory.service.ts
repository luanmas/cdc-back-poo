import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnterpriseInventory } from './entities/enterprise-inventory.entity';
import { Repository } from 'typeorm';
import { UserAlreadyHasEnterpriseException } from 'src/exceptions/user-already-has-enterprise.exception';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { EnterpriseInventoryProduct } from '../enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import { UpdateEnterpriseInventoryDto } from './dto/update-enterprise-inventory-product.dto';
import { Brand } from '../brand/entities/brand.entity';

@Injectable()
export class EnterpriseInventoryService {
  constructor(
    @InjectRepository(EnterpriseInventory)
    private readonly enterpriseInventoryRepository: Repository<EnterpriseInventory>,
    @InjectRepository(EnterpriseInventoryProduct)
    private readonly enterpriseInventoryProductRepository: Repository<EnterpriseInventoryProduct>,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    private readonly paginationService: PaginationService,
  ) {}

  async findAll(
    user: Express.User,
    categoryName?: string,
    orderBy?: string,
    orderDirection?: 'ASC' | 'DESC',
    page: string = '1',
    limit: string = '10',
  ): Promise<any> {
    try {
      const parsePage = parseInt(page);
      const parseLimit = parseInt(limit);
      if (!user.id_enterprise) {
        throw new BadRequestException(
          'Usuário não está associado a uma empresa.',
        );
      }

      const queryBuilder = this.enterpriseInventoryRepository
        .createQueryBuilder('inventory')
        .leftJoinAndSelect(
          'inventory.idEnterpriseCategory',
          'enterpriseCategory',
        )
        .leftJoinAndSelect('enterpriseCategory.category', 'category')
        .leftJoinAndSelect('inventory.products', 'products')
        .leftJoinAndSelect('inventory.enterprise', 'enterprise')
        .where('inventory.enterprise.id = :id_enterprise', {
          id_enterprise: user.id_enterprise,
        })
        .andWhere('enterpriseCategory.active = true');

      if (categoryName) {
        queryBuilder.andWhere(
          'LOWER(category.name) LIKE LOWER(:categoryName)',
          { categoryName: `%${categoryName}%` },
        );
      }

      if (orderBy && orderDirection) {
        const validOrderFields = ['categoryName', 'status'];
        if (validOrderFields.includes(orderBy)) {
          const orderField =
            orderBy === 'categoryName'
              ? 'category.name'
              : `inventory.${orderBy}`;
          queryBuilder.orderBy(orderField, orderDirection);
        } else {
          throw new BadRequestException('Campo de ordenação inválido.');
        }
      }

      const totalItems = await queryBuilder.getCount();
      const totalPages = Math.ceil(totalItems / parseLimit);

      const enterpriseInventory = await queryBuilder
        .skip((parsePage - 1) * parseLimit)
        .take(parseLimit)
        .getMany();

      const modelEnterpriseInventory = enterpriseInventory.map((inventory) => {
        const totalProducts = inventory.products.length;
        const activeProducts = inventory.products.filter(
          (product) => product.active,
        ).length;
        inventory.status = activeProducts > 0;

        const { products, enterprise, ...rest } = inventory;
        products;
        enterprise;
        return {
          ...rest,
          productCount: `${activeProducts}/${totalProducts}`,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalItems,
        data: modelEnterpriseInventory,
      };
    } catch (error) {
      if (error instanceof UserAlreadyHasEnterpriseException) {
        throw error;
      }
      if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new Error('Ocorreu um erro inesperado');
    }
  }

  async findOne(
    idEnterprise: number,
    page: string = '1',
    limit: string = '10',
    orderBy?: string,
    orderDirection?: 'ASC' | 'DESC',
    search?: string,
  ): Promise<any> {
    try {
      const parsePage = parseInt(page);
      const parseLimit = parseInt(limit);

      const query = this.enterpriseInventoryRepository
        .createQueryBuilder('inventory')
        .leftJoinAndSelect(
          'inventory.idEnterpriseCategory',
          'enterpriseCategory',
        )
        .leftJoinAndSelect('enterpriseCategory.category', 'category')
        .leftJoinAndSelect('inventory.enterprise', 'enterprise')
        .leftJoinAndSelect('inventory.products', 'products')
        .leftJoinAndSelect('products.product', 'product')
        .leftJoinAndSelect('products.brand_id', 'brandId')
        .leftJoinAndSelect('product.brands', 'productBrand')
        .leftJoinAndSelect('productBrand.brand', 'brand')
        .leftJoinAndSelect('product.unit', 'unit')
        .where('inventory.id = :idEnterprise', { idEnterprise });

      if (search) {
        query.andWhere('LOWER(product.name) LIKE LOWER(:search)', {
          search: `%${search}%`,
        });
      }

      if (orderBy && orderDirection) {
        const validOrderFields = [
          'productName',
          'min_quantity',
          'margin',
          'active',
        ];
        if (validOrderFields.includes(orderBy)) {
          if (orderBy === 'productName') {
            query.orderBy(`product.name`, orderDirection);
          } else {
            query.orderBy(`products.${orderBy}`, orderDirection);
          }
        } else {
          throw new BadRequestException('Invalid order field.');
        }
      }

      const inventory = await query.getOne();

      if (!inventory) {
        const inventorySearchNull =
          await this.enterpriseInventoryRepository.findOne({
            where: { id: idEnterprise },
            relations: [
              'idEnterpriseCategory',
              'idEnterpriseCategory.category',
            ],
          });
        const { products: productsToRemove, ...inventoryFormated } =
          inventorySearchNull;
        productsToRemove;
        return {
          first: 1,
          prev: null,
          next: null,
          last: null,
          pages: 0,
          items: 0,
          info: inventoryFormated,
          data: [],
        };
      }

      const totalProducts = inventory.products.length;
      const totalPages = Math.ceil(totalProducts / parseLimit);

      const startIndex = (parsePage - 1) * parseLimit;
      const endIndex = startIndex + parseLimit;
      const products = inventory.products.slice(startIndex, endIndex);
      const { products: productsInventory, ...inventoryFormated } = inventory;
      productsInventory;
      const modelProducts = products.map((product) => {
        const {
          product: { id, name, description, unit, brands },
          min_quantity,
          margin,
          active,
          brand_id,
        } = product;
        const brandNames = brands.map((brand) => brand.brand);
        const quantity_margin =
          margin != null
            ? margin * (min_quantity / 100) + min_quantity
            : inventory.enterprise.margin * (min_quantity / 100) + min_quantity;
        return {
          id,
          name,
          description,
          unit,
          min_quantity,
          margin,
          quantity_margin,
          active,
          brand_id,
          brands: brandNames,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalProducts,
        info: inventoryFormated,
        data: modelProducts,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }

  async update(
    id: number,
    updateEnterpriseInventoryDto: UpdateEnterpriseInventoryDto,
  ): Promise<void> {
    try {
      const { products } = updateEnterpriseInventoryDto;

      if (!products || products.length === 0) {
        throw new HttpException(
          'Products array must not be empty',
          HttpStatus.BAD_REQUEST,
        );
      }

      const enterpriseInventory =
        await this.enterpriseInventoryRepository.findOne({
          where: { id },
          relations: ['products'],
        });
      if (!enterpriseInventory) {
        throw new HttpException(
          'Enterprise inventory not found',
          HttpStatus.NOT_FOUND,
        );
      }
      const activeProducts = enterpriseInventory.products.filter(
        (product) => product.active,
      ).length;
      enterpriseInventory.status = activeProducts > 0;

      for (const productUpdate of products) {
        const product = await this.enterpriseInventoryProductRepository.findOne(
          {
            where: {
              product: { id: productUpdate.id },
              enterpriseInventory: { id },
            },
          },
        );
        if (!product) {
          throw new HttpException(
            `Product with id ${productUpdate.id} not found in the inventory`,
            HttpStatus.NOT_FOUND,
          );
        }

        const brand = await this.brandRepository.findOne({
          where: {
            id: productUpdate.brand_id,
          },
        });

        product.min_quantity = productUpdate.min_quantity;
        product.margin = productUpdate.margin;
        product.active = productUpdate.active;
        product.brand_id = brand;
        enterpriseInventory.updatedAt = new Date();

        await this.enterpriseInventoryRepository.save(enterpriseInventory);
        await this.enterpriseInventoryProductRepository.save(product);
      }
    } catch (error) {
      throw error;
    }
  }
}
