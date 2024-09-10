import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterpriseInventoryProduct1717987064600
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE enterprise_inventory_product (
                id bigserial  NOT NULL,
                min_quantity int  NOT NULL,
                margin int  NULL,
                active boolean  NOT NULL,
                product_id int  NOT NULL,
                brand_id int    NULL,
                enterprise_inventory_id int  NOT NULL,
                CONSTRAINT enterprise_inventory_product_pk PRIMARY KEY (id)
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE enterprise_inventory_product 
        `);
  }
}
