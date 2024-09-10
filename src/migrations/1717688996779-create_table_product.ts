import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProduct1717688996779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE product (
            id serial  NOT NULL,
            name varchar(255)  NOT NULL,
            description varchar(255)  NOT NULL,
            id_unit int  NOT NULL,
            id_category int  NOT NULL,
            CONSTRAINT product_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE product;    
    `);
  }
}
