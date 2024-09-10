import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterpriseInventory1717986838909
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- Reference: enterprise_inventory_enterprise (table: enterprise_inventory)
        ALTER TABLE enterprise_inventory ADD CONSTRAINT enterprise_inventory_enterprise
            FOREIGN KEY (id_enterprise)
            REFERENCES enterprise (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        -- Reference: enterprise_inventory_enterprise_category (table: enterprise_inventory)
        ALTER TABLE enterprise_inventory ADD CONSTRAINT enterprise_inventory_enterprise_category
            FOREIGN KEY (id_enterprise_category)
            REFERENCES enterprise_category (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            
    `);
  }
}
