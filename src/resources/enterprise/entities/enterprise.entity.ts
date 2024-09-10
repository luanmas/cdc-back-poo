import { Address } from 'src/resources/address/entities/address.entity';
import { User } from 'src/resources/auth/entities/User.entity';
import { Contact } from 'src/resources/contact/entities/contact.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'enterprise' })
export class Enterprise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'cnpj', nullable: false, unique: true })
  cnpj: string;

  @Column({ name: 'company', nullable: false })
  company: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'margin', nullable: false })
  margin: number;

  @OneToOne(() => Contact)
  @JoinColumn({ name: 'id_contact' })
  contact: Contact;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'id_address' })
  address: Address;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id', referencedColumnName: 'id_enterprise' })
  user: User;
}
