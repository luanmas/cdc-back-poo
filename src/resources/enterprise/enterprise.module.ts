import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.controller';
import { Enterprise } from './entities/enterprise.entity';
import { AuthModule } from '../auth/auth.module';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { Contact } from '../contact/entities/contact.entity';
import { Address } from '../address/entities/address.entity';
import { User } from '../auth/entities/User.entity';
import { EnterpriseCategory } from '../enterprise_category/entities/enterprise_category.entity';
import { EnterpriseInventory } from '../enterprise-inventory/entities/enterprise-inventory.entity';
import { EnterpriseInventoryProduct } from '../enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import { Product } from '../product/entities/product.entity';
import { Unit } from '../unit/entities/unit.entity';
import { Category } from '../categories/entities/category.entity';
import { Brand } from '../brand/entities/brand.entity';
import { ProductBrand } from '../product_brand/entities/product_brand.entity';
import { EnterpriseInventoryActual } from '../enterprise_inventory_actual/entities/enterprise_inventory_actual.entity';
import { EnterpriseInventoryProductActual } from '../enterprise_inventory_product_actual/entities/enterprise_inventory_product_actual.entity';
import { EnterpriseInventoryActualLog } from '../enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Enterprise,
      Contact,
      Address,
      User,
      Category,
      Brand,
      ProductBrand,
      EnterpriseCategory,
      EnterpriseInventory,
      EnterpriseInventoryActual,
      EnterpriseInventoryActualLog,
      EnterpriseInventoryProductActual,
      EnterpriseInventoryProduct,
      Product,
      Unit,
    ]),
    AuthModule,
  ],
  providers: [EnterpriseService, PaginationService],
  controllers: [EnterpriseController],
})
export class EnterpriseModule {}
