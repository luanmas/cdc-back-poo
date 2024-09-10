import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableEnterprise1717683506830 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE enterprise ADD CONSTRAINT enterprise_address
            FOREIGN KEY (id_address)
            REFERENCES address (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        ALTER TABLE enterprise ADD CONSTRAINT enterprise_contact
            FOREIGN KEY (id_contact)
            REFERENCES contact (id)
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
