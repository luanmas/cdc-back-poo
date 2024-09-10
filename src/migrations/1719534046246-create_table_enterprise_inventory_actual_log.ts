import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterpriseInventoryActualLog1719534046246
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE enterprise_inventory_actual_log (
          id bigserial  NOT NULL,
          updated_at timestamp  NULL,
          enterprise_inventory_actual_id int8  NOT NULL,
          CONSTRAINT enterprise_inventory_actual_log_pk PRIMARY KEY (id)
      ); 
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE enterprise_inventory_actual_log    
        `);
  }
}
