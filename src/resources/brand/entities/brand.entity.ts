import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brand' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: false })
  description: string;
}
