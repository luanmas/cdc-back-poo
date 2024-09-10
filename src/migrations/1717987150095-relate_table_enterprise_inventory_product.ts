import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterpriseInventoryProduct1717987150095
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            -- Reference: enterprise_inventory_product_enterprise_inventory (table: enterprise_inventory_product)
            ALTER TABLE enterprise_inventory_product ADD CONSTRAINT enterprise_inventory_product_enterprise_inventory
                FOREIGN KEY (enterprise_inventory_id)
                REFERENCES enterprise_inventory (id)
                ON DELETE  RESTRICT 
                ON UPDATE  CASCADE 
                NOT DEFERRABLE 
                INITIALLY IMMEDIATE
            ;

            -- Reference: enterprise_inventory_product_product (table: enterprise_inventory_product)
            ALTER TABLE enterprise_inventory_product ADD CONSTRAINT enterprise_inventory_product_product
                FOREIGN KEY (product_id)
                REFERENCES product (id)
                ON DELETE  RESTRICT 
                ON UPDATE  CASCADE 
                NOT DEFERRABLE 
                INITIALLY IMMEDIATE
            ;

            -- Reference: enterprise_inventory_product_product (table: enterprise_inventory_product)
            ALTER TABLE enterprise_inventory_product ADD CONSTRAINT enterprise_inventory_brand
                FOREIGN KEY (brand_id)
                REFERENCES brand (id)
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
