import { Brand } from 'src/resources/brand/entities/brand.entity';
import { Product } from 'src/resources/product/entities/product.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_brand' })
export class ProductBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'id_product' })
  product: Product;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: 'id_brand' })
  brand: Brand;
}
