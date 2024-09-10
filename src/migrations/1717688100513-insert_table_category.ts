import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTableCategory1717688100513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO category VALUES (1, 'Carnes Bovinas', 'Cortes de carne de boi como filé mignon, contrafilé, picanha, alcatra, etc.');
        INSERT INTO category VALUES (2, 'Carnes Suínas', 'Cortes de carne de porco como lombo, pernil, costelinha, barriga de porco, etc.');
        INSERT INTO category VALUES (3, 'Carnes de Aves', 'Diferentes partes de aves como peito de frango, coxa, asa, sobrecoxa, etc.');
        INSERT INTO category VALUES (4, 'Carnes de Cordeiro/Carneiro', 'Cortes de carne de cordeiro como perna, costeletas, paleta, etc.');
        INSERT INTO category VALUES (5, 'Frutos do Mar - Peixes', 'Diferentes tipos de peixes como salmão, robalo, atum, etc.');
        INSERT INTO category VALUES (6, 'Frutos do Mar - Mariscos', 'Camarões, lagostas, vieiras, mexilhões, etc.');
        INSERT INTO category VALUES (7, 'Vegetais de Folhas Verdes', 'Alface, rúcula, espinafre, couve, etc.');
        INSERT INTO category VALUES (8, 'Vegetais de Raízes e Tubérculos', 'Batata, cenoura, beterraba, rabanete, etc.');
        INSERT INTO category VALUES (9, 'Vegetais de Caule e Flores', 'Brócolis, couve-flor, aspargos, aipo, etc.');
        INSERT INTO category VALUES (10, 'Vegetais de Frutos', 'Tomate, pimentão, abobrinha, berinjela, etc.');
        INSERT INTO category VALUES (11, 'Frutas Cítricas', 'Laranja, limão, lima, grapefruit, etc.');
        INSERT INTO category VALUES (12, 'Frutas de Caroço', 'Pêssego, ameixa, cereja, damasco, etc.');
        INSERT INTO category VALUES (13, 'Frutas de Bagas', 'Morango, framboesa, mirtilo, amoras, etc.');
        INSERT INTO category VALUES (14, 'Frutas Tropicais', 'Banana, abacaxi, manga, coco, etc.');
        INSERT INTO category VALUES (15, 'Grãos e Cereais', 'Arroz, trigo, cevada, quinoa, etc.');
        INSERT INTO category VALUES (16, 'Leguminosas', 'Feijão, lentilha, grão-de-bico, ervilha, etc.');
        INSERT INTO category VALUES (17, 'Massas', 'Espaguete, penne, lasanha, ravióli, etc.');
        INSERT INTO category VALUES (18, 'Farinhas e Amidos', 'Farinha de trigo, farinha de milho, amido de milho, etc.');
        INSERT INTO category VALUES (19, 'Laticínios - Leite e Derivados', 'Leite, queijo, manteiga, iogurte, etc.');
        INSERT INTO category VALUES (20, 'Ovos e Produtos de Ovos', 'Ovos inteiros, ovos cozidos, ovos mexidos, etc.');
        INSERT INTO category VALUES (21, 'Condimentos Secos', 'Sal, pimenta, orégano, cominho, etc.');
        INSERT INTO category VALUES (22, 'Condimentos Líquidos', 'Azeite, vinagre, molho de soja, molho inglês, etc.');
        INSERT INTO category VALUES (23, 'Molhos e Pastas', 'Molho de tomate, molho pesto, mostarda, maionese, etc.');
        INSERT INTO category VALUES (24, 'Pães e Produtos de Panificação', 'Pães, baguetes, croissants, bolos, etc.');
        INSERT INTO category VALUES (25, 'Sobremesas e Doces', 'Bolos, tortas, sorvetes, chocolates, doces, etc.');
        INSERT INTO category VALUES (26, 'Bebidas Não Alcoólicas - Refrigerantes', 'Coca-Cola, Pepsi, Sprite, etc.');
        INSERT INTO category VALUES (27, 'Bebidas Não Alcoólicas - Sucos', 'Suco de laranja, suco de maçã, suco de uva, etc.');
        INSERT INTO category VALUES (28, 'Bebidas Não Alcoólicas - Água e Águas Aromatizadas', 'Água mineral, água com gás, água aromatizada, etc.');
        INSERT INTO category VALUES (29, 'Bebidas Alcoólicas - Vinhos', 'Vinho tinto, vinho branco, vinho rosé, etc.');
        INSERT INTO category VALUES (30, 'Bebidas Alcoólicas - Destilados e Cervejas', 'Whisky, vodka, cerveja IPA, cerveja Lager, etc.');    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM category    
    `);
  }
}
