import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterpriseInventoryActual1719534334134
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE enterprise_inventory_actual ADD CONSTRAINT enterprise_inventory_actual_enterprise_inventory
            FOREIGN KEY (id_enterprise_inventory)
            REFERENCES enterprise_inventory (id)
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
