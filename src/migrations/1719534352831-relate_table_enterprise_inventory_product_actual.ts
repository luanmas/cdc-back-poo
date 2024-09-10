import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterpriseInventoryProductActual1719534352831
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE enterprise_inventory_product_actual ADD CONSTRAINT enterprise_inventory_actual_product_inventory_product
            FOREIGN KEY (id_enterprise_inventory_product)
            REFERENCES enterprise_inventory_product (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        ALTER TABLE enterprise_inventory_product_actual ADD CONSTRAINT enterprise_inventory_product_actual_enterprise_inventory_actual
            FOREIGN KEY (id_enterprise_inventory_actual)
            REFERENCES enterprise_inventory_actual (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        ALTER TABLE enterprise_inventory_product_actual ADD CONSTRAINT enterprise_inventory_product_actual_inventory_actual_log
            FOREIGN KEY (enterprise_inventory_actual_log_id)
            REFERENCES enterprise_inventory_actual_log (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner;
  }
}
