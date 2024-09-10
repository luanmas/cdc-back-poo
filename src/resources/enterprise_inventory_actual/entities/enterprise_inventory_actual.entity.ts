import { EnterpriseInventory } from 'src/resources/enterprise-inventory/entities/enterprise-inventory.entity';
import { EnterpriseInventoryActualLog } from 'src/resources/enterprise_inventory_actual_log/entities/enterprise_inventory_actual_log.entity';
import { EnterpriseInventoryProductActual } from 'src/resources/enterprise_inventory_product_actual/entities/enterprise_inventory_product_actual.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'enterprise_inventory_actual' })
export class EnterpriseInventoryActual {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => EnterpriseInventory)
  @JoinColumn({ name: 'id_enterprise_inventory' })
  enterpriseInventory: EnterpriseInventory;

  @OneToMany(
    () => EnterpriseInventoryProductActual,
    (enterpriseInventoryProductActual) =>
      enterpriseInventoryProductActual.enterpriseInventoryActual,
  )
  enterpriseInventoryProductActuals: EnterpriseInventoryProductActual[];

  @OneToMany(
    () => EnterpriseInventoryActualLog,
    (enterpriseInventoryActualLog) =>
      enterpriseInventoryActualLog.enterpriseInventoryActual,
  )
  enterpriseInventoryActualLogs: EnterpriseInventoryActualLog[];
}
