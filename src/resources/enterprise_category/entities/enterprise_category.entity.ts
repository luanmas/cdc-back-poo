import { Category } from 'src/resources/categories/entities/category.entity';
import { Enterprise } from 'src/resources/enterprise/entities/enterprise.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class EnterpriseCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'id_category' })
  category: Category;

  @ManyToOne(() => Enterprise)
  @JoinColumn({ name: 'id_enterprise' })
  enterprise: Enterprise;
}
