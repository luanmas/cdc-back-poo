import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityPropertyNotFoundError,
  QueryFailedError,
  Repository,
} from 'typeorm';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { Enterprise } from './entities/enterprise.entity';
import { UserAlreadyHasEnterpriseException } from 'src/exceptions/user-already-has-enterprise.exception';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { Contact } from '../contact/entities/contact.entity';
import { Address } from '../address/entities/address.entity';
import { User } from '../auth/entities/User.entity';
import { EnterpriseCategory } from '../enterprise_category/entities/enterprise_category.entity';
import { EnterpriseInventory } from '../enterprise-inventory/entities/enterprise-inventory.entity';
import { EnterpriseInventoryProduct } from '../enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import { Product } from '../product/entities/product.entity';
import { Category } from '../categories/entities/category.entity';
import { EnterpriseInventoryProductActual } from '../enterprise_inventory_product_actual/entities/enterprise_inventory_product_actual.entity';
import { EnterpriseInventoryActual } from '../enterprise_inventory_actual/entities/enterprise_inventory_actual.entity';
import { EnterpriseInventoryActualLog } from '../enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(Enterprise)
    private readonly enterpriseRepository: Repository<Enterprise>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(EnterpriseCategory)
    private readonly enterpriseCategoryRepository: Repository<EnterpriseCategory>,
    @InjectRepository(EnterpriseInventory)
    private readonly enterpriseInventoryRepository: Repository<EnterpriseInventory>,
    @InjectRepository(EnterpriseInventoryActual)
    private readonly enterpriseInventoryActualRepository: Repository<EnterpriseInventoryActual>,
    @InjectRepository(EnterpriseInventoryProduct)
    private readonly enterpriseInventoryProductRepository: Repository<EnterpriseInventoryProduct>,
    @InjectRepository(EnterpriseInventoryProductActual)
    private readonly enterpriseInventoryProductActualRepository: Repository<EnterpriseInventoryProductActual>,
    @InjectRepository(EnterpriseInventoryActualLog)
    private readonly enterpriseInventoryActualLogRepository: Repository<EnterpriseInventoryActualLog>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly paginationService: PaginationService,
  ) {}

  async create(
    createEnterpriseDto: CreateEnterpriseDto,
    user: Express.User,
  ): Promise<Enterprise> {
    try {
      if (user.id_enterprise) throw new UserAlreadyHasEnterpriseException();

      const contact = this.contactRepository.create(
        createEnterpriseDto.contact,
      );
      await this.contactRepository.save(contact);

      const address = this.addressRepository.create(
        createEnterpriseDto.address,
      );
      await this.addressRepository.save(address);

      const enterprise = this.enterpriseRepository.create({
        ...createEnterpriseDto,
        margin: 30,
        createdAt: new Date(Date.now()),
        contact,
        address,
      });

      const savedEnterprise = await this.enterpriseRepository.save(enterprise);

      const categories = await this.categoryRepository.find();
      const enterpriseCategoryPromises = categories.map(async (category) => {
        const enterpriseCategory = new EnterpriseCategory();
        enterpriseCategory.active = true;
        enterpriseCategory.enterprise = savedEnterprise;
        enterpriseCategory.category = category;
        return await this.enterpriseCategoryRepository.save(enterpriseCategory);
      });

      const enterpriseCategories = await Promise.all(
        enterpriseCategoryPromises,
      );

      const enterpriseInventoryPromises = enterpriseCategories.map(
        async (enterpriseCategory) => {
          const enterpriseInventory = new EnterpriseInventory();
          enterpriseInventory.createdAt = new Date(Date.now());
          enterpriseInventory.enterprise = savedEnterprise;
          enterpriseInventory.status = false;
          enterpriseInventory.idEnterpriseCategory = enterpriseCategory.id;
          const savedInventory =
            await this.enterpriseInventoryRepository.save(enterpriseInventory);

          const enterpriseInventoryActual = new EnterpriseInventoryActual();
          enterpriseInventoryActual.enterpriseInventory = savedInventory;
          const savedEnterpriseInventoryActual =
            await this.enterpriseInventoryActualRepository.save(
              enterpriseInventoryActual,
            );

          const products = await this.productRepository.find({
            where: { category: enterpriseCategory.category },
          });

          const inventoryProductPromises = products.map(async (product) => {
            const inventoryProduct = new EnterpriseInventoryProduct();
            inventoryProduct.enterpriseInventory = savedInventory;
            inventoryProduct.product = product;
            inventoryProduct.min_quantity = 10;
            inventoryProduct.margin = null;
            inventoryProduct.active = false;

            const savedInventoryProduct =
              await this.enterpriseInventoryProductRepository.save(
                inventoryProduct,
              );

            const inventoryProductActual =
              new EnterpriseInventoryProductActual();
            inventoryProductActual.enterpriseInventoryProduct =
              savedInventoryProduct;
            inventoryProductActual.enterpriseInventoryActual =
              savedEnterpriseInventoryActual;
            inventoryProductActual.quantity = 0;
            inventoryProductActual.lastPrice = 0;
            inventoryProductActual.quantityToDeliver = 0;
            inventoryProductActual.enterpriseInventoryActualLog = null;

            return await this.enterpriseInventoryProductActualRepository.save(
              inventoryProductActual,
            );
          });

          await Promise.all(inventoryProductPromises);

          return savedInventory;
        },
      );

      await Promise.all(enterpriseInventoryPromises);

      await this.userRepository.update(user.id, {
        id_enterprise: savedEnterprise.id,
      });

      return savedEnterprise;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw error;
      }
      if (error instanceof UserAlreadyHasEnterpriseException) {
        throw error;
      }
      throw error;
    }
  }

  async findAll(): Promise<any> {
    return this.enterpriseRepository.find({
      relations: ['contact', 'address', 'user'],
    });
  }

  async findOne(id: number): Promise<Enterprise> {
    try {
      const enterprise = await this.enterpriseRepository.findOne({
        where: { id },
        relations: ['contact', 'address', 'user'],
      });
      if (!enterprise) {
        throw new BadRequestException(`Enterprise with ID ${id} not found`);
      }
      return enterprise;
    } catch (error) {
      if (
        error instanceof EntityPropertyNotFoundError ||
        error instanceof BadRequestException
      ) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (error instanceof QueryFailedError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }

  async update(
    id: number,
    updateEnterpriseDto: UpdateEnterpriseDto,
  ): Promise<Enterprise> {
    try {
      const enterprise = await this.enterpriseRepository.findOne({
        where: { id },
        relations: ['contact', 'address'],
      });
      if (!enterprise) {
        throw new BadRequestException(`Enterprise with ID ${id} not found`);
      }
      if (Object.keys(updateEnterpriseDto).length === 0) {
        throw new BadRequestException('Update data is empty');
      }

      if (updateEnterpriseDto.contact) {
        const contact = await this.contactRepository.findOne({
          where: { id: enterprise.contact.id },
        });
        if (contact) {
          Object.assign(contact, updateEnterpriseDto.contact);
          await this.contactRepository.save(contact);
        }
      }

      if (updateEnterpriseDto.address) {
        const address = await this.addressRepository.findOne({
          where: { id: enterprise.address.id },
        });
        if (address) {
          Object.assign(address, updateEnterpriseDto.address);
          await this.addressRepository.save(address);
        }
      }

      Object.assign(enterprise, updateEnterpriseDto);
      enterprise.updatedAt = new Date(Date.now());

      await this.enterpriseRepository.save(enterprise);

      return await this.enterpriseRepository.findOne({
        where: { id },
        relations: ['contact', 'address', 'user'],
      });
    } catch (error) {
      if (
        error instanceof EntityPropertyNotFoundError ||
        error instanceof BadRequestException
      ) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (error instanceof QueryFailedError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }

  async remove(id: number, user: Express.User): Promise<void> {
    try {
      const enterprise = await this.enterpriseRepository.findOne({
        where: { id },
        relations: ['contact', 'address'],
      });
      if (!enterprise) {
        throw new BadRequestException(`Enterprise with ID ${id} not found`);
      }
      const searchUser = await this.userRepository.findOne({
        where: { id_enterprise: id },
      });
      if (user.id != searchUser.id) {
        throw new UnauthorizedException(
          `You are not allowed to delete this enterprise`,
        );
      }

      const enterpriseInventories =
        await this.enterpriseInventoryRepository.find({
          where: { enterprise: enterprise },
          relations: ['products'],
        });

      for (const inventory of enterpriseInventories) {
        const inventoryActuals =
          await this.enterpriseInventoryActualRepository.find({
            where: { enterpriseInventory: inventory },
          });

        for (const actual of inventoryActuals) {
          await this.enterpriseInventoryActualLogRepository.delete({
            enterpriseInventoryActual: actual,
          });
        }

        await this.enterpriseInventoryActualRepository.delete({
          enterpriseInventory: inventory,
        });
      }

      const deleteInventoryProductActualsPromises = enterpriseInventories.map(
        async (inventory) => {
          const inventoryProducts = inventory.products;
          const deleteProductActualsPromises = inventoryProducts.map(
            async (product) => {
              return await this.enterpriseInventoryProductActualRepository.delete(
                {
                  enterpriseInventoryProduct: product,
                },
              );
            },
          );
          await Promise.all(deleteProductActualsPromises);
        },
      );

      await Promise.all(deleteInventoryProductActualsPromises);

      const deleteInventoryProductsPromises = enterpriseInventories.map(
        async (inventory) => {
          return await this.enterpriseInventoryProductRepository.delete({
            enterpriseInventory: inventory,
          });
        },
      );

      await Promise.all(deleteInventoryProductsPromises);

      await this.enterpriseInventoryRepository.delete({
        enterprise: enterprise,
      });

      await this.enterpriseCategoryRepository.delete({
        enterprise: enterprise,
      });

      searchUser.id_enterprise = null;
      await this.userRepository.update(searchUser.id, searchUser);

      await this.enterpriseRepository.delete(id);
      await this.contactRepository.remove(enterprise.contact);
      await this.addressRepository.remove(enterprise.address);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (error instanceof UnauthorizedException) {
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
      }
      if (error instanceof QueryFailedError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
