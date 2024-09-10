import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1717683047418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE address (
            id serial  NOT NULL,
            cep varchar(255)  NOT NULL,
            state varchar(255)  NOT NULL,
            city varchar(255)  NOT NULL,
            district varchar(255)  NULL,
            street varchar(255)  NOT NULL,
            CONSTRAINT address_pk PRIMARY KEY (id)
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE address
        `);
  }
}
