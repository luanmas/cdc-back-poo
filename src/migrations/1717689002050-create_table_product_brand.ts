import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProductBrand1717689002050
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE product_brand (
            id serial  NOT NULL,
            id_product int  NOT NULL,
            id_brand int  NOT NULL,
            CONSTRAINT product_brand_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FORM product_brand;
    `);
  }
}
