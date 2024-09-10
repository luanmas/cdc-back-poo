import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableContact1717683038483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE contact (
            id serial  NOT NULL,
            email varchar(255)  NOT NULL,
            telephone varchar(255)  NULL,
            cell_phone varchar(255)  NOT NULL,
            CONSTRAINT contact_pk PRIMARY KEY (id)
        );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE contact    
    `);
  }
}
