import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1717646578788 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE users (
            id serial  NOT NULL,
            email varchar(255)  NOT NULL,
            display_name varchar(255)  NOT NULL,
            photo_link varchar(255)  NOT NULL,
            created_at timestamp  NOT NULL,
            id_enterprise int  NULL,
            CONSTRAINT users_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE users
    `);
  }
}
