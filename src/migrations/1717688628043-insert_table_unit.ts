import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTableUnit1717688628043 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            insert into unit values (1, 'KG', 'Kilogramas');
            insert into unit values (2, 'UND', 'Unidades');
            insert into unit values (3, 'LT', 'Litros');
            insert into unit values (4, 'PCT', 'Pacotes');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DELETE FROM unit;
        `);
  }
}
