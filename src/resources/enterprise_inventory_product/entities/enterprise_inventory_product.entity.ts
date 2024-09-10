import { Brand } from 'src/resources/brand/entities/brand.entity';
import { EnterpriseInventory } from 'src/resources/enterprise-inventory/entities/enterprise-inventory.entity';
import { Product } from 'src/resources/product/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class EnterpriseInventoryProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  min_quantity: number;

  @Column()
  margin: number;

  @Column({ default: false })
  active: boolean;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => EnterpriseInventory)
  @JoinColumn({ name: 'enterprise_inventory_id' })
  enterpriseInventory: EnterpriseInventory;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: 'brand_id' })
  brand_id: Brand;
}
