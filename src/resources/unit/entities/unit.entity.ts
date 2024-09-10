import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'unit' })
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: false })
  description: string;
}
