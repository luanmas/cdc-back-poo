import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableProduct1717689119370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- Reference: product_category (table: product)
        ALTER TABLE product ADD CONSTRAINT product_category
            FOREIGN KEY (id_category)
            REFERENCES category (id)
            ON DELETE  RESTRICT 
            ON UPDATE  CASCADE 
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        -- Reference: product_unit (table: product)
        ALTER TABLE product ADD CONSTRAINT product_unit
            FOREIGN KEY (id_unit)
            REFERENCES unit (id)
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
