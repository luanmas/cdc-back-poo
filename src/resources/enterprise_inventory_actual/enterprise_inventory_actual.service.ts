import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnterpriseInventoryActual } from './entities/enterprise_inventory_actual.entity';
import { EnterpriseInventoryProductActual } from '../enterprise_inventory_product_actual/entities/enterprise_inventory_product_actual.entity';
import { Enterprise } from '../enterprise/entities/enterprise.entity';
import { EnterpriseInventoryActualLog } from '../enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';
import { validate } from 'class-validator';
import { UpdateEnterpriseInventoryActualDto } from './dto/update-enterprise_inventory_actual.dto copy';
import { EnterpriseInventoryProduct } from '../enterprise_inventory_product/entities/enterprise_inventory_product.entity';

@Injectable()
export class EnterpriseInventoryActualService {
  constructor(
    @InjectRepository(Enterprise)
    private readonly enterpriseRepository: Repository<Enterprise>,
    @InjectRepository(EnterpriseInventoryActual)
    private readonly enterpriseInventoryActualRepository: Repository<EnterpriseInventoryActual>,
    @InjectRepository(EnterpriseInventoryProductActual)
    private readonly enterpriseInventoryProductActualRepository: Repository<EnterpriseInventoryProductActual>,
    @InjectRepository(EnterpriseInventoryProduct)
    private readonly enterpriseInventoryProductRepository: Repository<EnterpriseInventoryProduct>,
    @InjectRepository(EnterpriseInventoryActualLog)
    private readonly enterpriseInventoryActualLogRepository: Repository<EnterpriseInventoryActualLog>,
  ) {}

  async findAllCategories(
    user: Express.User,
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

      const queryBuilder = this.enterpriseInventoryActualRepository
        .createQueryBuilder('inventoryActual')
        .leftJoinAndSelect('inventoryActual.enterpriseInventory', 'inventory')
        .leftJoinAndSelect('inventory.products', 'products')
        .leftJoinAndSelect(
          'inventory.idEnterpriseCategory',
          'enterpriseCategory',
        )
        .leftJoinAndSelect('enterpriseCategory.category', 'category')
        .where('inventory.enterprise.id = :id_enterprise', {
          id_enterprise: user.id_enterprise,
        })
        .andWhere('products.active = true')
        .andWhere('enterpriseCategory.active = true');

      const totalItems = await queryBuilder.getCount();
      const totalPages = Math.ceil(totalItems / parseLimit);

      const categories = await queryBuilder
        .skip((parsePage - 1) * parseLimit)
        .take(parseLimit)
        .getMany();

      const configuredCategories = categories.filter((category) =>
        category.enterpriseInventory.products.some((product) => product.active),
      );

      const result = configuredCategories.map((category) => {
        const { enterpriseInventory, ...rest } = category;
        const { products, ...restInventory } = enterpriseInventory;
        products;
        return {
          ...rest,
          enterpriseInventory: restInventory,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalItems,
        data: result,
      };
    } catch (error) {
      throw error;
    }
  }

  async findLogs(
    user: Express.User,
    page: string = '1',
    limit: string = '10',
    search?: string,
  ): Promise<any> {
    try {
      const parsePage = parseInt(page);
      const parseLimit = parseInt(limit);

      if (!user.id_enterprise) {
        throw new BadRequestException(
          'Usuário não está associado a uma empresa.',
        );
      }
      const queryBuilder = this.enterpriseInventoryActualLogRepository
        .createQueryBuilder('inventoryActualLog')
        .leftJoinAndSelect(
          'inventoryActualLog.enterpriseInventoryActual',
          'enterpriseInventoryActual',
        )
        .leftJoinAndSelect(
          'enterpriseInventoryActual.enterpriseInventory',
          'enterpriseInventory',
        )
        .leftJoinAndSelect(
          'enterpriseInventory.idEnterpriseCategory',
          'idEnterpriseCategory',
        )
        .leftJoinAndSelect('idEnterpriseCategory.category', 'category');

      if (search) {
        queryBuilder.andWhere('LOWER(category.name) LIKE LOWER(:search)', {
          search: `%${search}%`,
        });
      }

      const totalItems = await queryBuilder.getCount();
      const totalPages = Math.ceil(totalItems / parseLimit);

      const categories = await queryBuilder
        .skip((parsePage - 1) * parseLimit)
        .take(parseLimit)
        .getMany();

      const result = categories.map((category) => {
        const {
          id,
          updatedAt,
          enterpriseInventoryActual: {
            enterpriseInventory: { idEnterpriseCategory },
          },
        } = category;
        return {
          id,
          updatedAt,
          idEnterpriseCategory,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalItems,
        data: result,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOneLog(
    user: Express.User,
    id: number,
    page: string = '1',
    limit: string = '10',
    orderBy?: string,
    orderDirection?: 'ASC' | 'DESC',
    search?: string,
  ): Promise<any> {
    try {
      const parsePage = parseInt(page);
      const parseLimit = parseInt(limit);

      if (!user.id_enterprise) {
        throw new BadRequestException(
          'Usuário não está associado a uma empresa.',
        );
      }

      const enterprise = await this.enterpriseRepository.findOne({
        where: { id: user.id_enterprise },
      });

      const queryBuilder = this.enterpriseInventoryProductActualRepository
        .createQueryBuilder('productActual')
        .leftJoinAndSelect(
          'productActual.enterpriseInventoryProduct',
          'inventoryProduct',
        )
        .leftJoinAndSelect('inventoryProduct.product', 'product')
        .leftJoinAndSelect('product.unit', 'unit')
        .leftJoinAndSelect('inventoryProduct.enterpriseInventory', 'inventory')
        .leftJoinAndSelect(
          'inventory.idEnterpriseCategory',
          'enterpriseCategory',
        )
        .leftJoinAndSelect('enterpriseCategory.category', 'category')
        .where('productActual.enterpriseInventoryActualLog.id = :id', { id })
        .andWhere('inventory.enterprise.id = :id_enterprise', {
          id_enterprise: user.id_enterprise,
        })
        .andWhere('inventoryProduct.active = true')
        .andWhere('enterpriseCategory.active = true');

      if (search) {
        queryBuilder.andWhere('LOWER(product.name) LIKE LOWER(:search)', {
          search: `%${search}%`,
        });
      }

      if (orderBy && orderDirection) {
        const validOrderFields = ['productName'];
        if (validOrderFields.includes(orderBy)) {
          queryBuilder.orderBy(`product.name`, orderDirection);
        } else {
          throw new BadRequestException('Invalid order field.');
        }
      }

      const totalItems = await queryBuilder.getCount();
      const totalPages = Math.ceil(totalItems / parseLimit);

      const productActuals = await queryBuilder
        .skip((parsePage - 1) * parseLimit)
        .take(parseLimit)
        .getMany();

      if (!productActuals.length) {
        const infoEnterpriseInventory =
          await this.enterpriseInventoryActualRepository.findOne({
            where: { id },
            relations: [
              'enterpriseInventory',
              'enterpriseInventory.idEnterpriseCategory',
              'enterpriseInventory.idEnterpriseCategory.category',
            ],
          });
        return {
          first: 1,
          prev: null,
          next: null,
          last: null,
          pages: 0,
          items: 0,
          info: infoEnterpriseInventory.enterpriseInventory,
          data: [],
        };
      }

      const result = productActuals.map((productActual) => {
        const { enterpriseInventoryProduct, ...restProductActual } =
          productActual;
        const { lastPrice, ...restProductActualWithoutPrice } =
          restProductActual;
        lastPrice;
        const {
          product: { name, unit },
          ...restInventoryProduct
        } = enterpriseInventoryProduct;
        const { margin, min_quantity } = restInventoryProduct;
        const minQuantityFormatted = margin
          ? min_quantity * (margin / 100) + min_quantity
          : min_quantity * (enterprise.margin / 100) + min_quantity;
        return {
          ...restProductActualWithoutPrice,
          name,
          lastPrice: 0,
          unit,
          quantityQuotation:
            minQuantityFormatted - restProductActual.quantity <= 0
              ? 0
              : min_quantity - restProductActual.quantity,
          min_quantity: minQuantityFormatted,
          margin,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalItems,
        info: productActuals[0].enterpriseInventoryProduct.enterpriseInventory,
        data: result,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAll(
    user: Express.User,
    page: string = '1',
    limit: string = '10',
    orderBy?: string,
    orderDirection?: 'ASC' | 'DESC',
    search?: string,
  ): Promise<any> {
    try {
      const parsePage = parseInt(page);
      const parseLimit = parseInt(limit);

      if (!user.id_enterprise) {
        throw new BadRequestException(
          'Usuário não está associado a uma empresa.',
        );
      }

      const enterprise = await this.enterpriseRepository.findOne({
        where: { id: user.id_enterprise },
      });

      const queryBuilder = this.enterpriseInventoryProductActualRepository
        .createQueryBuilder('productActual')
        .leftJoinAndSelect(
          'productActual.enterpriseInventoryProduct',
          'inventoryProduct',
        )
        .leftJoinAndSelect('inventoryProduct.product', 'product')
        .leftJoinAndSelect('product.unit', 'unit')
        .leftJoinAndSelect('inventoryProduct.enterpriseInventory', 'inventory')
        .leftJoinAndSelect(
          'inventory.idEnterpriseCategory',
          'enterpriseCategory',
        )
        .leftJoinAndSelect('enterpriseCategory.category', 'category')
        .andWhere('productActual.enterpriseInventoryActualLog.id IS NULL')
        .andWhere('inventory.enterprise.id = :id_enterprise', {
          id_enterprise: user.id_enterprise,
        })
        .andWhere('inventoryProduct.active = true')
        .andWhere('enterpriseCategory.active = true');

      if (search) {
        queryBuilder.andWhere('LOWER(product.name) LIKE LOWER(:search)', {
          search: `%${search}%`,
        });
      }

      if (orderBy && orderDirection) {
        const validOrderFields = ['productName'];
        if (validOrderFields.includes(orderBy)) {
          queryBuilder.orderBy(`product.name`, orderDirection);
        } else {
          throw new BadRequestException('Invalid order field.');
        }
      }
      const totalItems = await queryBuilder.getCount();
      const totalPages = Math.ceil(totalItems / parseLimit);

      const productActuals = await queryBuilder
        .skip((parsePage - 1) * parseLimit)
        .take(parseLimit)
        .getMany();

      if (!productActuals.length) {
        return {
          first: 1,
          prev: null,
          next: null,
          last: null,
          pages: 0,
          items: 0,
          data: [],
        };
      }

      const result = productActuals.map((productActual) => {
        const { enterpriseInventoryProduct, ...restProductActual } =
          productActual;
        const { lastPrice, ...restProductActualWithoutPrice } =
          restProductActual;
        lastPrice;
        const {
          product: { name, unit },
          ...restInventoryProduct
        } = enterpriseInventoryProduct;
        const { margin, min_quantity } = restInventoryProduct;
        const minQuantityFormatted = margin
          ? min_quantity * (margin / 100) + min_quantity
          : min_quantity * (enterprise.margin / 100) + min_quantity;
        return {
          ...restProductActualWithoutPrice,
          name,
          lastPrice: 0,
          unit,
          quantityQuotation:
            minQuantityFormatted - restProductActual.quantity <= 0
              ? 0
              : minQuantityFormatted - restProductActual.quantity,
          min_quantity: minQuantityFormatted,
          margin,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalItems,
        data: result,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(
    user: Express.User,
    id: number,
    page: string = '1',
    limit: string = '10',
    orderBy?: string,
    orderDirection?: 'ASC' | 'DESC',
    search?: string,
  ): Promise<any> {
    try {
      const parsePage = parseInt(page);
      const parseLimit = parseInt(limit);

      if (!user.id_enterprise) {
        throw new BadRequestException(
          'Usuário não está associado a uma empresa.',
        );
      }

      const enterprise = await this.enterpriseRepository.findOne({
        where: { id: user.id_enterprise },
      });

      const queryBuilder = this.enterpriseInventoryProductActualRepository
        .createQueryBuilder('productActual')
        .leftJoinAndSelect(
          'productActual.enterpriseInventoryProduct',
          'inventoryProduct',
        )
        .leftJoinAndSelect('inventoryProduct.product', 'product')
        .leftJoinAndSelect('product.unit', 'unit')
        .leftJoinAndSelect('inventoryProduct.enterpriseInventory', 'inventory')
        .leftJoinAndSelect(
          'inventory.idEnterpriseCategory',
          'enterpriseCategory',
        )
        .leftJoinAndSelect('enterpriseCategory.category', 'category')
        .where('productActual.enterpriseInventoryActual.id = :id', { id })
        .andWhere('productActual.enterpriseInventoryActualLog.id IS NULL')
        .andWhere('inventory.enterprise.id = :id_enterprise', {
          id_enterprise: user.id_enterprise,
        })
        .andWhere('inventoryProduct.active = true')
        .andWhere('enterpriseCategory.active = true');

      if (search) {
        queryBuilder.andWhere('LOWER(product.name) LIKE LOWER(:search)', {
          search: `%${search}%`,
        });
      }

      if (orderBy && orderDirection) {
        const validOrderFields = ['productName'];
        if (validOrderFields.includes(orderBy)) {
          queryBuilder.orderBy(`product.name`, orderDirection);
        } else {
          throw new BadRequestException('Invalid order field.');
        }
      }
      const totalItems = await queryBuilder.getCount();
      const totalPages = Math.ceil(totalItems / parseLimit);

      const productActuals = await queryBuilder
        .skip((parsePage - 1) * parseLimit)
        .take(parseLimit)
        .getMany();

      const infoEnterpriseInventory =
        await this.enterpriseInventoryActualRepository.findOne({
          where: { id },
          relations: [
            'enterpriseInventory',
            'enterpriseInventory.idEnterpriseCategory',
            'enterpriseInventory.idEnterpriseCategory.category',
          ],
        });

      if (!productActuals.length) {
        return {
          first: 1,
          prev: null,
          next: null,
          last: null,
          pages: 0,
          items: 0,
          info: infoEnterpriseInventory,
          data: [],
        };
      }

      const result = productActuals.map((productActual) => {
        const { enterpriseInventoryProduct, ...restProductActual } =
          productActual;
        const { lastPrice, ...restProductActualWithoutPrice } =
          restProductActual;
        lastPrice;
        const {
          product: { name, unit },
          ...restInventoryProduct
        } = enterpriseInventoryProduct;
        const { margin, min_quantity } = restInventoryProduct;
        const minQuantityFormatted = margin
          ? min_quantity * (margin / 100) + min_quantity
          : min_quantity * (enterprise.margin / 100) + min_quantity;
        return {
          ...restProductActualWithoutPrice,
          name,
          lastPrice: 0,
          unit,
          quantityQuotation:
            minQuantityFormatted - restProductActual.quantity <= 0
              ? 0
              : minQuantityFormatted - restProductActual.quantity,
          min_quantity: minQuantityFormatted,
          margin,
        };
      });

      return {
        first: 1,
        prev: parsePage > 1 ? parsePage - 1 : null,
        next: parsePage < totalPages ? parsePage + 1 : null,
        last: totalPages,
        pages: totalPages,
        items: totalItems,
        info: infoEnterpriseInventory,
        data: result,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    updateDto: UpdateEnterpriseInventoryActualDto,
    user: Express.User,
  ): Promise<any> {
    try {
      if (!user.id_enterprise) {
        throw new BadRequestException(
          'Usuário não está associado a uma empresa.',
        );
      }

      const inventoryActual =
        await this.enterpriseInventoryActualRepository.find({
          relations: [
            'enterpriseInventoryProductActuals',
            'enterpriseInventoryProductActuals.enterpriseInventoryProduct',
            'enterpriseInventoryProductActuals.enterpriseInventoryActual',
          ],
        });

      const errors = await validate(updateDto);
      if (errors.length > 0) {
        throw new BadRequestException(errors);
      }

      const enterpriseInventoryActualLog = new EnterpriseInventoryActualLog();
      enterpriseInventoryActualLog.updatedAt = new Date();
      enterpriseInventoryActualLog.enterpriseInventoryActual =
        inventoryActual[0];

      const newLog = await this.enterpriseInventoryActualLogRepository.save(
        enterpriseInventoryActualLog,
      );

      for (const inventoryAct of inventoryActual) {
        for (const productDto of updateDto.products) {
          const { id, quantity, quantityToDeliver, quantityQuotation } =
            productDto;
          quantityQuotation;

          const product = inventoryAct.enterpriseInventoryProductActuals.find(
            (p) => p.id === id,
          );

          if (!product) {
            console.error(
              'Produto não encontrado nas categorias anteriores:',
              id,
            );
            continue;
          }

          try {
            product.quantity = quantity ?? product.quantity;
            product.quantityToDeliver =
              quantityToDeliver ?? product.quantityToDeliver;

            await this.enterpriseInventoryProductActualRepository.save(product);

            const { id: idProduct, ...restProduct } = product;
            idProduct;
            const newProduct =
              this.enterpriseInventoryProductActualRepository.create({
                ...restProduct,
                enterpriseInventoryActualLog: newLog,
              });

            await this.enterpriseInventoryProductActualRepository.save(
              newProduct,
            );
          } catch (error) {
            await this.enterpriseInventoryActualLogRepository.delete(newLog);
            throw error;
          }
        }
      }
      return updateDto;
    } catch (error) {
      throw error;
    }
  }
}
