import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterpriseCategory1717687780099
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- Reference: enterprise_category_category (table: enterprise_category)
        ALTER TABLE enterprise_category ADD CONSTRAINT enterprise_category_category
            FOREIGN KEY (id_category)
            REFERENCES category (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        -- Reference: enterprise_category_enterprise (table: enterprise_category)
        ALTER TABLE enterprise_category ADD CONSTRAINT enterprise_category_enterprise
            FOREIGN KEY (id_enterprise)
            REFERENCES enterprise (id)
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
