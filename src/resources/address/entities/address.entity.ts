import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'state', nullable: false })
  state: string;

  @Column({ name: 'city', nullable: false })
  city: string;

  @Column({ name: 'district', nullable: false })
  district: string;

  @Column({ name: 'street', nullable: false })
  street: string;
}
