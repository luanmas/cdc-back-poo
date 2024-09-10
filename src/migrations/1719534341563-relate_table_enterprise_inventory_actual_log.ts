import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterpriseInventoryActualLog1719534341563
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            ALTER TABLE enterprise_inventory_actual_log ADD CONSTRAINT enterprise_inventory_actual_log_enterprise_inventory_actual
                FOREIGN KEY (enterprise_inventory_actual_id)
                REFERENCES enterprise_inventory_actual (id)
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
