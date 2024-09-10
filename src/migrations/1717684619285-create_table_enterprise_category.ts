import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterpriseCategory1717684619285
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE enterprise_category (
            id serial  NOT NULL,
            active boolean  NOT NULL DEFAULT true,
            id_category int  NOT NULL,
            id_enterprise int  NOT NULL,
            CONSTRAINT enterprise_category_pk PRIMARY KEY (id)
      );  
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE enterprise_category    
    `);
  }
}
