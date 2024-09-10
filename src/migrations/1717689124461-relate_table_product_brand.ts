import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelateTableProductBrand1717689124461
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- Reference: product_brand_brand (table: product_brand)
        ALTER TABLE product_brand ADD CONSTRAINT product_brand_brand
            FOREIGN KEY (id_brand)
            REFERENCES brand (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;

        -- Reference: product_brand_product (table: product_brand)
        ALTER TABLE product_brand ADD CONSTRAINT product_brand_product
            FOREIGN KEY (id_product)
            REFERENCES product (id)  
            NOT DEFERRABLE 
            INITIALLY IMMEDIATE
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner;
  }
}
