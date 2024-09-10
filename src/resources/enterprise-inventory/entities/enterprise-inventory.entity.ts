import { Enterprise } from 'src/resources/enterprise/entities/enterprise.entity';
import { EnterpriseCategory } from 'src/resources/enterprise_category/entities/enterprise_category.entity';
import { EnterpriseInventoryProduct } from 'src/resources/enterprise_inventory_product/entities/enterprise_inventory_product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'enterprise_inventory' })
export class EnterpriseInventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @Column({ default: false })
  status: boolean;

  @ManyToOne(() => Enterprise)
  @JoinColumn({ name: 'id_enterprise' })
  enterprise: Enterprise;

  @ManyToOne(() => EnterpriseCategory)
  @JoinColumn({ name: 'id_enterprise_category' })
  idEnterpriseCategory: number;

  @OneToMany(
    () => EnterpriseInventoryProduct,
    (product) => product.enterpriseInventory,
  )
  products: EnterpriseInventoryProduct[];
}
