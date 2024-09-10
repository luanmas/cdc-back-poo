import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contact' })
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'telephone', nullable: false })
  telephone: string;

  @Column({ name: 'cell_phone', nullable: false })
  cellPhone: string;
}
