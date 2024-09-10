import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCategory1717684606398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE category (
            id serial  NOT NULL,
            name varchar(255)  NOT NULL,
            description varchar(255)  NOT NULL,
            CONSTRAINT category_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE category    
    `);
  }
}
