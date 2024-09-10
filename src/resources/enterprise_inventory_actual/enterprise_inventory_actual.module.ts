import { EnterpriseInventoryActualLog } from './../enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';
import { Module } from '@nestjs/common';
import { EnterpriseInventoryActualService } from './enterprise_inventory_actual.service';
import { EnterpriseInventoryActualController } from './enterprise_inventory_actual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from '../enterprise/entities/enterprise.entity';
import { User } from '../auth/entities/User.entity';
import { EnterpriseCategory } from '../enterprise_category/entities/enterprise_category.entity';
import { EnterpriseInventory } from '../enterprise-inventory/entities/enterprise-inventory.entity';
import { EnterpriseInventoryProduct } from '../enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import { Product } from '../product/entities/product.entity';
import { AuthModule } from '../auth/auth.module';
import { EnterpriseInventoryProductActual } from '../enterprise_inventory_product_actual/entities/enterprise_inventory_product_actual.entity';
import { EnterpriseInventoryActual } from './entities/enterprise_inventory_actual.entity';
import { Category } from '../categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Enterprise,
      User,
      Category,
      EnterpriseCategory,
      EnterpriseInventory,
      EnterpriseInventoryProduct,
      EnterpriseInventoryActual,
      EnterpriseInventoryActualLog,
      EnterpriseInventoryProductActual,
      Product,
    ]),
    AuthModule,
  ],
  controllers: [EnterpriseInventoryActualController],
  providers: [EnterpriseInventoryActualService],
})
export class EnterpriseInventoryActualModule {}
