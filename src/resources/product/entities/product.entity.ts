import { Category } from 'src/resources/categories/entities/category.entity';
import { ProductBrand } from 'src/resources/product_brand/entities/product_brand.entity';
import { Unit } from 'src/resources/unit/entities/unit.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'id_category' })
  category: Category;

  @ManyToOne(() => Unit)
  @JoinColumn({ name: 'id_unit' })
  unit: Unit;

  @OneToMany(() => ProductBrand, (productBrand) => productBrand.product)
  brands: ProductBrand[];
}
