import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTableBrand1717688632938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- brands de Carnes Bovinas
        INSERT INTO brand VALUES (1, 'Friboi', 'Uma das brands líderes no mercado brasileiro de carnes bovinas.');
        INSERT INTO brand VALUES (2, 'Swift', 'Oferece uma ampla variedade de cortes de carne bovina de qualidade.');
        INSERT INTO brand VALUES (3, 'Sadia', 'Conhecida por seus products de qualidade, incluindo carnes bovinas.');
        INSERT INTO brand VALUES (4, 'JBS', 'Uma das maiores empresas de alimentos do mundo, incluindo carnes bovinas.');
        INSERT INTO brand VALUES (5, 'Maturatta', 'Especializada em cortes nobres de carne bovina.');

        -- brands de Carnes Suínas
        INSERT INTO brand VALUES (6, 'Seara', 'Oferece uma variedade de products suínos, incluindo bacon e linguiças.');
        INSERT INTO brand VALUES (7, 'Perdigão', 'Conhecida por seus products suínos de alta qualidade e sabor.');
        INSERT INTO brand VALUES (8, 'Aurora', 'Uma das maiores cooperativas de products suínos do Brasil.');
        INSERT INTO brand VALUES (9, 'Pamplona', 'Especializada em embutidos e products suínos.');
        INSERT INTO brand VALUES (10, 'Frimesa', 'Oferece uma ampla gama de products suínos, desde cortes até embutidos.');

        -- brands de Carnes de Aves
        INSERT INTO brand VALUES (11, 'Perdigão', 'Líder no mercado de aves no Brasil, oferece uma variedade de products de frango.');
        INSERT INTO brand VALUES (12, 'Sadia', 'Conhecida por seus products de aves, incluindo frangos inteiros e cortes.');
        INSERT INTO brand VALUES (13, 'Frigorífico Globo', 'Especializado em cortes de frango e products de aves.');
        INSERT INTO brand VALUES (14, 'Copagril', 'Oferece uma ampla variedade de products de frango, incluindo cortes e embutidos.');
        INSERT INTO brand VALUES (15, 'SuperFrango', 'brand conhecida por sua qualidade e variedade de products de frango.');

        -- brands de Carnes de Cordeiro/Carneiro
        INSERT INTO brand VALUES (16, 'Ouro do Pampa', 'Especializada em cortes nobres de carne de cordeiro.');
        INSERT INTO brand VALUES (17, 'Cordeiro Gaúcho', 'Produz carnes de cordeiro com qualidade e sabor excepcionais.');
        INSERT INTO brand VALUES (18, 'Costela de Ouro', 'Conhecida por seus cortes de costela de cordeiro de alta qualidade.');
        INSERT INTO brand VALUES (19, 'Cordeiro Real', 'brand premium de carne de cordeiro, com cortes selecionados.');
        INSERT INTO brand VALUES (20, 'Rei do Cordeiro', 'Especializada em cortes tradicionais de carne de cordeiro.');

        -- brands de Frutos do Mar - Peixes
        INSERT INTO brand VALUES (21, 'Gomes da Costa', 'Oferece uma variedade de peixes enlatados e conservas.');
        INSERT INTO brand VALUES (22, 'Pescanova', 'brand reconhecida por seus products de frutos do mar congelados.');
        INSERT INTO brand VALUES (23, 'Santa Maria', 'Especializada em pescados frescos e congelados.');
        INSERT INTO brand VALUES (24, 'Peixe Bom', 'brand nacional de peixes frescos e congelados.');
        INSERT INTO brand VALUES (25, 'Pioneiro do Mar', 'Especializado em frutos do mar frescos e congelados.');

        -- brands de Carnes Bovinas
        INSERT INTO brand VALUES (26, 'Marfrig', 'brand brasileira de carne bovina com ampla presença no mercado.');
        INSERT INTO brand VALUES (27, 'Minerva Foods', 'Uma das principais empresas do Brasil no setor de carnes.');
        INSERT INTO brand VALUES (28, 'Mercado do Boi', 'Especializada em cortes de carne bovina de alta qualidade.');
        INSERT INTO brand VALUES (29, 'Boi Bom', 'brand nacional de carnes bovinas, oferece cortes variados.');
        INSERT INTO brand VALUES (30, 'Carnes Tijuca', 'Especializada em cortes de carne bovina, com qualidade e tradição.');

        -- brands de Carnes Suínas
        INSERT INTO brand VALUES (31, 'Sadia', 'brand conhecida por sua qualidade em products suínos, como presuntos e linguiças.');
        INSERT INTO brand VALUES (32, 'Pif Paf', 'Especializada em carnes suínas e de aves, oferece products de qualidade.');
        INSERT INTO brand VALUES (33, 'Frimesa', 'Especializada em cortes de carne suína, com products variados.');
        INSERT INTO brand VALUES (34, 'Perdigão', 'Oferece uma variedade de products suínos, como salsichas e bacon.');
        INSERT INTO brand VALUES (35, 'Aurora', 'brand reconhecida por sua diversidade em products suínos, como embutidos e cortes nobres.');

        -- brands de Carnes de Aves
        INSERT INTO brand VALUES (36, 'Copacol', 'Especializada em aves e seus derivados, como cortes de frango e ovos.');
        INSERT INTO brand VALUES (37, 'Agrosul', 'Oferece uma variedade de products de aves, como frangos inteiros e cortes.');
        INSERT INTO brand VALUES (38, 'Avivar', 'brand de frangos de qualidade, oferece cortes frescos e congelados.');
        INSERT INTO brand VALUES (39, 'Copersucar', 'Especializada em products de aves, como filés de frango e nuggets.');
        INSERT INTO brand VALUES (40, 'Primor', 'Oferece uma ampla linha de products de aves, incluindo cortes e embutidos.');

        -- brands de Carnes de Cordeiro/Carneiro
        INSERT INTO brand VALUES (41, 'Montana', 'Especializada em cortes nobres de carne de cordeiro.');
        INSERT INTO brand VALUES (42, 'Cordeiro do Sul', 'brand nacional de carne de cordeiro, oferece cortes selecionados.');
        INSERT INTO brand VALUES (43, 'Carnes do Pampa', 'Conhecida por sua qualidade em cortes de carne de cordeiro.');
        INSERT INTO brand VALUES (44, 'Carnaúba', 'Especializada em cortes tradicionais de carne de cordeiro.');
        INSERT INTO brand VALUES (45, 'Fazenda do Cordeiro', 'brand de carne de cordeiro fresca e de qualidade.');

        -- brands de Frutos do Mar - Peixes
        INSERT INTO brand VALUES (46, 'Pescados do Brasil', 'Especializada em peixes frescos e congelados, provenientes de diversas regiões do país.');
        INSERT INTO brand VALUES (47, 'Mar Azul', 'brand nacional de frutos do mar, oferece uma variedade de peixes frescos e congelados.');
        INSERT INTO brand VALUES (48, 'Pescado Forte', 'Conhecida por sua qualidade em peixes frescos e congelados.');
        INSERT INTO brand VALUES (49, 'BrasPescados', 'Especializada em pescados nacionais, oferece uma variedade de products de qualidade.');
        INSERT INTO brand VALUES (50, 'Peixaria do Mar', 'brand de peixes frescos, oferece uma ampla variedade de espécies.');

        -- brands de Frutos do Mar - Mariscos
        INSERT INTO brand VALUES (51, 'Mariscos do Brasil', 'Especializada em mariscos frescos e congelados, provenientes de diversas regiões do país.');
        INSERT INTO brand VALUES (52, 'Marítimo', 'brand nacional de mariscos, oferece uma variedade de products frescos e enlatados.');
        INSERT INTO brand VALUES (53, 'Mar de Coral', 'Conhecida por sua qualidade em mariscos frescos e enlatados.');
        INSERT INTO brand VALUES (54, 'Mar Vivo', 'Especializada em mariscos frescos e congelados, com variedade de espécies.');
        INSERT INTO brand VALUES (55, 'Mar e Sabor', 'brand de mariscos frescos, oferece uma ampla variedade de products.');

        -- brands de Vegetais de Folhas Verdes
        INSERT INTO brand VALUES (56, 'Folha Verde', 'Especializada em folhas verdes frescas e de qualidade.');
        INSERT INTO brand VALUES (57, 'Frescor', 'brand de folhas verdes frescas, cultivadas com cuidado.');
        INSERT INTO brand VALUES (58, 'Verde Vivo', 'Oferece uma variedade de folhas verdes orgânicas.');
        INSERT INTO brand VALUES (59, 'Folhas do Brasil', 'Especializada em folhas verdes hidropônicas.');
        INSERT INTO brand VALUES (60, 'Verdura Fresca', 'brand de folhas verdes frescas, colhidas no dia.');

        -- brands de Vegetais de Raízes e Tubérculos
        INSERT INTO brand VALUES (61, 'Terra Fértil', 'Especializada em tubérculos frescos e de qualidade.');
        INSERT INTO brand VALUES (62, 'Raízes do Brasil', 'brand nacional de raízes e tubérculos frescos.');
        INSERT INTO brand VALUES (63, 'Terra Viva', 'Oferece uma variedade de raízes e tubérculos orgânicos.');
        INSERT INTO brand VALUES (64, 'Terra Fértil', 'Especializada em tubérculos frescos e cultivados de forma sustentável.');
        INSERT INTO brand VALUES (65, 'Sabor da Terra', 'brand de tubérculos frescos, colhidos no ponto certo.');

        -- brands de Vegetais de Caule e Flores
        INSERT INTO brand VALUES (66, 'Caule Verde', 'Especializada em vegetais de caule frescos e de qualidade.');
        INSERT INTO brand VALUES (67, 'Flores da Horta', 'Oferece uma variedade de flores comestíveis.');
        INSERT INTO brand VALUES (68, 'Horta Viva', 'brand de vegetais de caule frescos, cultivados organicamente.');
        INSERT INTO brand VALUES (69, 'Verdejando', 'Especializada em vegetais de caule frescos e hidropônicos.');
        INSERT INTO brand VALUES (70, 'Flores da Terra', 'brand de flores comestíveis frescas.');

        -- brands de Vegetais de Frutos
        INSERT INTO brand VALUES (71, 'Frutaria do Brasil', 'Especializada em frutas frescas e de qualidade.');
        INSERT INTO brand VALUES (72, 'Frutas Tropicais', 'brand nacional de frutas tropicais frescas.');
        INSERT INTO brand VALUES (73, 'Frutas do Sul', 'Oferece uma variedade de frutas frescas, provenientes do Sul do Brasil.');
        INSERT INTO brand VALUES (74, 'Frutas do Brasil', 'Especializada em frutas frescas, colhidas no ponto certo.');
        INSERT INTO brand VALUES (75, 'Frutas da Estação', 'brand de frutas frescas, disponíveis de acordo com a estação do ano.');

        -- brands de Grãos e Cereais
        INSERT INTO brand VALUES (76, 'Cereal Brasil', 'Especializada em grãos e cereais, oferece uma ampla variedade de products.');
        INSERT INTO brand VALUES (77, 'Grãos do Sul', 'brand nacional de grãos e cereais, com qualidade e tradição.');
        INSERT INTO brand VALUES (78, 'Grãos Saudáveis', 'Oferece uma variedade de grãos e cereais orgânicos.');
        INSERT INTO brand VALUES (79, 'Cereais do Vale', 'Especializada em cereais frescos e de qualidade.');
        INSERT INTO brand VALUES (80, 'Grãos Nobres', 'brand de grãos e cereais de qualidade premium.');

        -- brands de Leguminosas
        INSERT INTO brand VALUES (81, 'Legumes do Brasil', 'Especializada em leguminosas frescas e de qualidade.');
        INSERT INTO brand VALUES (82, 'Leguminosas Saudáveis', 'Oferece uma variedade de leguminosas orgânicas.');
        INSERT INTO brand VALUES (83, 'Leguminosas do Sul', 'brand nacional de leguminosas frescas, com qualidade e tradição.');
        INSERT INTO brand VALUES (84, 'Legumes Naturais', 'Especializada em leguminosas frescas e cultivadas de forma sustentável.');
        INSERT INTO brand VALUES (85, 'Legumes Nobres', 'brand de leguminosas frescas, colhidas no ponto certo.');

        -- brands de Massas
        INSERT INTO brand VALUES (86, 'Massas Italianas', 'Especializada em massas frescas e de qualidade, com tradição italiana.');
        INSERT INTO brand VALUES (87, 'Massas do Sul', 'brand nacional de massas frescas, com qualidade e sabor excepcionais.');
        INSERT INTO brand VALUES (88, 'Massas Artesanais', 'Oferece uma variedade de massas artesanais, feitas com ingredientes selecionados.');
        INSERT INTO brand VALUES (89, 'Massas do Brasil', 'Especializada em massas frescas, com ingredientes nacionais.');
        INSERT INTO brand VALUES (90, 'Massas Gourmet', 'brand de massas frescas de alta qualidade, com sabores exclusivos.');

        -- brands de Farinhas e Amidos
        INSERT INTO brand VALUES (91, 'Farinhas do Brasil', 'Especializada em farinhas e amidos de qualidade.');
        INSERT INTO brand VALUES (92, 'Farinhas Saudáveis', 'Oferece uma variedade de farinhas e amidos orgânicos.');
        INSERT INTO brand VALUES (93, 'Farinhas Nobres', 'brand de farinhas e amidos de qualidade premium.');
        INSERT INTO brand VALUES (94, 'Farinhas do Sul', 'brand nacional de farinhas e amidos, com qualidade e tradição.');
        INSERT INTO brand VALUES (95, 'Farinhas Artesanais', 'Especializada em farinhas e amidos frescos, feitos de forma artesanal.');

        -- brands de Laticínios - Leite e Derivados
        INSERT INTO brand VALUES (96, 'Laticínios do Brasil', 'Especializada em laticínios frescos e de qualidade.');
        INSERT INTO brand VALUES (97, 'Laticínios Saudáveis', 'Oferece uma variedade de laticínios orgânicos.');
        INSERT INTO brand VALUES (98, 'Laticínios do Sul', 'brand nacional de laticínios, com qualidade e tradição.');
        INSERT INTO brand VALUES (99, 'Laticínios Naturais', 'Especializada em laticínios frescos e cultivados de forma sustentável.');
        INSERT INTO brand VALUES (100, 'Laticínios Nobres', 'brand de laticínios frescos, colhidos no ponto certo.');

        -- brands de Ovos e products de Ovos
        INSERT INTO brand VALUES (101, 'Ovos do Brasil', 'Especializada em ovos frescos e de qualidade.');
        INSERT INTO brand VALUES (102, 'Ovos Saudáveis', 'Oferece uma variedade de ovos orgânicos.');
        INSERT INTO brand VALUES (103, 'Ovos do Sul', 'brand nacional de ovos, com qualidade e tradição.');
        INSERT INTO brand VALUES (104, 'Ovos Naturais', 'Especializada em ovos frescos e cultivados de forma sustentável.');
        INSERT INTO brand VALUES (105, 'Ovos Nobres', 'brand de ovos frescos, colhidos no ponto certo.');

        -- brands de Condimentos Secos
        INSERT INTO brand VALUES (106, 'Condimentos do Brasil', 'Especializada em condimentos secos de qualidade.');
        INSERT INTO brand VALUES (107, 'Condimentos Saudáveis', 'Oferece uma variedade de condimentos orgânicos.');
        INSERT INTO brand VALUES (108, 'Condimentos do Sul', 'brand nacional de condimentos, com qualidade e tradição.');
        INSERT INTO brand VALUES (109, 'Condimentos Naturais', 'Especializada em condimentos frescos e cultivados de forma sustentável.');
        INSERT INTO brand VALUES (110, 'Condimentos Nobres', 'brand de condimentos frescos, colhidos no ponto certo.');

        -- brands de Molhos e Temperos
        INSERT INTO brand VALUES (111, 'Molhos do Brasil', 'Especializada em molhos e temperos de qualidade.');
        INSERT INTO brand VALUES (112, 'Molhos Saudáveis', 'Oferece uma variedade de molhos orgânicos.');
        INSERT INTO brand VALUES (113, 'Molhos do Sul', 'brand nacional de molhos, com qualidade e tradição.');
        INSERT INTO brand VALUES (114, 'Molhos Naturais', 'Especializada em molhos frescos e cultivados de forma sustentável.');
        INSERT INTO brand VALUES (115, 'Molhos Nobres', 'brand de molhos frescos, colhidos no ponto certo.');

        -- brands de Bebidas Não Alcoólicas
        INSERT INTO brand VALUES (116, 'Bebidas do Brasil', 'Especializada em bebidas não alcoólicas de qualidade.');
        INSERT INTO brand VALUES (117, 'Bebidas Saudáveis', 'Oferece uma variedade de bebidas orgânicas.');
        INSERT INTO brand VALUES (118, 'Bebidas do Sul', 'brand nacional de bebidas, com qualidade e tradição.');
        INSERT INTO brand VALUES (119, 'Bebidas Naturais', 'Especializada em bebidas frescas e cultivadas de forma sustentável.');
        INSERT INTO brand VALUES (120, 'Bebidas Nobres', 'brand de bebidas frescas, colhidas no ponto certo.');

        -- brands de Bebidas Alcoólicas
        INSERT INTO brand VALUES (121, 'Bebidas Alcoólicas do Brasil', 'Especializada em bebidas alcoólicas de qualidade.');
        INSERT INTO brand VALUES (122, 'Bebidas Alcoólicas Saudáveis', 'Oferece uma variedade de bebidas alcoólicas orgânicas.');
        INSERT INTO brand VALUES (123, 'Bebidas Alcoólicas do Sul', 'brand nacional de bebidas alcoólicas, com qualidade e tradição.');
        INSERT INTO brand VALUES (124, 'Bebidas Alcoólicas Naturais', 'Especializada em bebidas alcoólicas frescas e cultivadas de forma sustentável.');
        INSERT INTO brand VALUES (125, 'Bebidas Alcoólicas Nobres', 'brand de bebidas alcoólicas frescas, colhidas no ponto certo.');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM brand
    `);
  }
}
