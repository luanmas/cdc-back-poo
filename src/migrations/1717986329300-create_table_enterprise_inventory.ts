import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterpriseInventory1717986329300
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE enterprise_inventory (
            id serial  NOT NULL,
            created_at timestamp  NOT NULL,
            updated_at timestamp  NULL,
            status boolean  NOT NULL,
            id_enterprise int  NOT NULL,
            id_enterprise_category int  NOT NULL,
            CONSTRAINT enterprise_inventory_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE enterprise_inventory
    `);
  }
}
