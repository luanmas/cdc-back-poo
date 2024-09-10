import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableBrand1717688470070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE brand (
            id serial  NOT NULL,
            name varchar(255)  NOT NULL,
            description varchar(255)  NOT NULL,
            CONSTRAINT brand_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE brand;
    `);
  }
}
