import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUnit1717688480863 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE unit (
            id serial  NOT NULL,
            name varchar(255)  NOT NULL,
            description varchar(255)  NOT NULL,
            CONSTRAINT unit_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE unit;    
    `);
  }
}
