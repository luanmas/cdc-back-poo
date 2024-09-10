import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableUsers1717683433586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE users ADD CONSTRAINT user_enterprise
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
