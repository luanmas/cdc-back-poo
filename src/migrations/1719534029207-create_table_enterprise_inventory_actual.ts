import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterpriseInventoryActual1719534029207
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE enterprise_inventory_actual (
          id bigserial  NOT NULL,
          updated_at timestamp  NULL,
          id_enterprise_inventory int  NOT NULL,
          CONSTRAINT enterprise_inventory_actual_pk PRIMARY KEY (id)
      );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE enterprise_inventory_actual    
        `);
  }
}
