import { EnterpriseInventoryActual } from 'src/resources/enterprise_inventory_actual/entities/enterprise_inventory_actual.entity';
import { EnterpriseInventoryActualLog } from 'src/resources/enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';
import { EnterpriseInventoryProduct } from 'src/resources/enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'enterprise_inventory_product_actual' })
export class EnterpriseInventoryProductActual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  quantity: number;

  @Column({ name: 'quantity_to_deliver', default: 0 })
  quantityToDeliver: number;

  @Column({ name: 'last_price', default: 0, type: 'money' })
  lastPrice: number;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => EnterpriseInventoryProduct)
  @JoinColumn({ name: 'id_enterprise_inventory_product' })
  enterpriseInventoryProduct: EnterpriseInventoryProduct;

  @ManyToOne(() => EnterpriseInventoryActual)
  @JoinColumn({ name: 'id_enterprise_inventory_actual' })
  enterpriseInventoryActual: EnterpriseInventoryActual;

  @ManyToOne(() => EnterpriseInventoryActualLog)
  @JoinColumn({ name: 'enterprise_inventory_actual_log_id' })
  enterpriseInventoryActualLog: EnterpriseInventoryActualLog;
}
