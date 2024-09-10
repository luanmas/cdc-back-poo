import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterpriseInventoryProductActual1719534062212
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE enterprise_inventory_product_actual (
          id bigserial  NOT NULL,
          quantity int  NULL DEFAULT 0,
          quantity_to_deliver int  NULL,
          last_price money  NULL,
          updated_at timestamp  NULL,
          id_enterprise_inventory_product int8  NOT NULL,
          id_enterprise_inventory_actual int8  NOT NULL,
          enterprise_inventory_actual_log_id int8 NULL,
          CONSTRAINT enterprise_inventory_product_actual_pk PRIMARY KEY (id)
      );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE enterprise_inventory_product_actual
        `);
  }
}
