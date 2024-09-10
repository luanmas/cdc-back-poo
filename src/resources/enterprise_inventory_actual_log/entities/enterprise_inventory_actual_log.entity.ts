import { EnterpriseInventoryActual } from 'src/resources/enterprise_inventory_actual/entities/enterprise_inventory_actual.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'enterprise_inventory_actual_log' })
export class EnterpriseInventoryActualLog {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  // @Column({ type: 'int' })
  // type: number;

  @ManyToOne(() => EnterpriseInventoryActual)
  @JoinColumn({ name: 'enterprise_inventory_actual_id' })
  enterpriseInventoryActual: EnterpriseInventoryActual;
}
