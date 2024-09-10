import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEnterprise1717683271209 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE enterprise (
            id serial  NOT NULL,
            name varchar(255)  NOT NULL,
            cnpj VARCHAR(18) NOT NULL UNIQUE,
            company varchar(255)  NOT NULL,
            created_at timestamp  NOT NULL,
            updated_at timestamp  NULL,
            margin int  NULL,
            id_contact int  NOT NULL,
            id_address int  NOT NULL,
            CONSTRAINT enterprise_pk PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE enterprise    
        `);
  }
}
