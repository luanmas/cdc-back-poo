import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'display_name', nullable: false })
  displayName: string;

  @Column({ name: 'photo_link', nullable: false })
  photoLink: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ nullable: true })
  id_enterprise: number;
}
