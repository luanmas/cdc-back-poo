import { Module } from '@nestjs/common';
import { EnterpriseInventoryService } from './enterprise-inventory.service';
import { EnterpriseInventoryController } from './enterprise-inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnterpriseInventoryProduct } from '../enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import { EnterpriseInventory } from './entities/enterprise-inventory.entity';
import { EnterpriseCategory } from '../enterprise_category/entities/enterprise_category.entity';
import { Category } from '../categories/entities/category.entity';
import { User } from '../auth/entities/User.entity';
import { AuthModule } from '../auth/auth.module';
import { Enterprise } from '../enterprise/entities/enterprise.entity';
import { EnterpriseModule } from '../enterprise/enterprise.module';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { Brand } from '../brand/entities/brand.entity';
import { Product } from '../product/entities/product.entity';
import { ProductBrand } from '../product_brand/entities/product_brand.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Brand,
      Product,
      ProductBrand,
      Category,
      Enterprise,
      EnterpriseCategory,
      EnterpriseInventory,
      EnterpriseInventoryProduct,
    ]),
    AuthModule,
    EnterpriseModule,
  ],
  controllers: [EnterpriseInventoryController],
  providers: [EnterpriseInventoryService, PaginationService],
})
export class EnterpriseInventoryModule {}
