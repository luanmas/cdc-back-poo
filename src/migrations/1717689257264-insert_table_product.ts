import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTableProduct1717689257264 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        -- Carnes Bovinas
        INSERT INTO product VALUES (1, 'Filé Mignon', 'Corte nobre de carne bovina', 1, 1);
        INSERT INTO product VALUES (2, 'Contrafilé', 'Corte de carne bovina macio e suculento', 1, 1);
        INSERT INTO product VALUES (3, 'Picanha', 'Corte de carne bovina saboroso e macio', 1, 1);
        INSERT INTO product VALUES (4, 'Alcatra', 'Corte de carne bovina macio e versátil', 1, 1);
        INSERT INTO product VALUES (5, 'Cupim', 'Corte de carne bovina com gordura marmorizada', 1, 1);
        INSERT INTO product VALUES (6, 'Costela', 'Corte de carne bovina com osso e sabor marcante', 1, 1);
        INSERT INTO product VALUES (7, 'Maminha', 'Corte de carne bovina suculento e macio', 1, 1);
        INSERT INTO product VALUES (8, 'Fraldinha', 'Corte de carne bovina saboroso e suculento', 1, 1);
        INSERT INTO product VALUES (9, 'Filé de Costela', 'Corte de carne bovina com sabor único', 1, 1);
        INSERT INTO product VALUES (10, 'Coxão Mole', 'Corte de carne bovina macio e versátil', 1, 1);
        INSERT INTO product VALUES (11, 'Coxão Duro', 'Corte de carne bovina com fibras mais firmes', 1, 1);
        INSERT INTO product VALUES (12, 'Acém', 'Corte de carne bovina com sabor marcante', 1, 1);
        INSERT INTO product VALUES (13, 'Capa de Filé', 'Corte de carne bovina com textura suculenta', 1, 1);
        INSERT INTO product VALUES (14, 'Rabo', 'Corte de carne bovina com osso e sabor único', 1, 1);
        INSERT INTO product VALUES (15, 'Coração de Alcatra', 'Corte de carne bovina macio e saboroso', 1, 1);
        INSERT INTO product VALUES (16, 'Patinho', 'Corte de carne bovina magro e versátil', 1, 1);
        INSERT INTO product VALUES (17, 'Filé de Agulha', 'Corte de carne bovina com fibras longas e suculentas', 1, 1);
        INSERT INTO product VALUES (18, 'Peixinho', 'Corte de carne bovina macio e suculento', 1, 1);
        INSERT INTO product VALUES (19, 'Contrafilé de Costela', 'Corte de carne bovina suculento e saboroso', 1, 1);
        INSERT INTO product VALUES (20, 'Ponta de Agulha', 'Corte de carne bovina com sabor intenso', 1, 1);

        -- Carnes Suínas
        INSERT INTO product VALUES (21, 'Lombo', 'Corte suíno magro e saboroso', 1, 2);
        INSERT INTO product VALUES (22, 'Pernil', 'Corte suíno macio e suculento', 1, 2);
        INSERT INTO product VALUES (23, 'Costelinha', 'Corte suíno com bastante sabor', 1, 2);
        INSERT INTO product VALUES (24, 'Panceta', 'Corte suíno com gordura e sabor marcante', 1, 2);
        INSERT INTO product VALUES (25, 'Barriga de Porco', 'Corte suíno com gordura e sabor único', 1, 2);
        INSERT INTO product VALUES (26, 'Linguiça Toscana', 'Embutido suíno com tempero tradicional', 1, 2);
        INSERT INTO product VALUES (27, 'Linguiça Calabresa', 'Embutido suíno com tempero picante', 1, 2);
        INSERT INTO product VALUES (28, 'Linguiça Portuguesa', 'Embutido suíno com tempero tradicional português', 1, 2);
        INSERT INTO product VALUES (29, 'Pé de Porco', 'Parte suína com sabor peculiar', 1, 2);
        INSERT INTO product VALUES (30, 'Orelha de Porco', 'Parte suína com textura crocante', 1, 2);
        INSERT INTO product VALUES (31, 'Rabo de Porco', 'Parte suína com osso e sabor marcante', 1, 2);
        INSERT INTO product VALUES (32, 'Rins de Porco', 'Órgão suíno com sabor peculiar', 1, 2);
        INSERT INTO product VALUES (33, 'Fígado de Porco', 'Órgão suíno rico em nutrientes', 1, 2);
        INSERT INTO product VALUES (34, 'Papo de Porco', 'Parte suína com textura macia e sabor delicado', 1, 2);
        INSERT INTO product VALUES (35, 'Mão de Porco', 'Parte suína com osso e carne saborosa', 1, 2);
        INSERT INTO product VALUES (36, 'Rabo de Porco Salgado', 'Parte suína salgada e saborosa', 1, 2);
        INSERT INTO product VALUES (37, 'Pele de Porco', 'Parte suína com textura crocante e sabor marcante', 1, 2);
        INSERT INTO product VALUES (38, 'Tripa de Porco', 'Parte suína usada em embutidos e pratos tradicionais', 1, 2);
        INSERT INTO product VALUES (39, 'Pulmão de Porco', 'Órgão suíno com sabor peculiar', 1, 2);
        INSERT INTO product VALUES (40, 'Cabeça de Porco', 'Parte suína com carne e sabor únicos', 1, 2);

        -- Carnes de Aves
        INSERT INTO product VALUES (41, 'Peito de Frango', 'Parte magra e suculenta do frango', 1, 3);
        INSERT INTO product VALUES (42, 'Coxa de Frango', 'Parte mais suculenta e saborosa do frango', 1, 3);
        INSERT INTO product VALUES (43, 'Asa de Frango', 'Parte crocante e saborosa do frango', 1, 3);
        INSERT INTO product VALUES (44, 'Sobrecoxa de Frango', 'Parte suculenta e macia do frango', 1, 3);
        INSERT INTO product VALUES (45, 'Coração de Frango', 'Parte saborosa e delicada do frango', 1, 3);
        INSERT INTO product VALUES (46, 'Moela de Frango', 'Órgão saboroso e textura delicada do frango', 1, 3);
        INSERT INTO product VALUES (47, 'Pescoço de Frango', 'Parte saborosa e versátil do frango', 1, 3);
        INSERT INTO product VALUES (48, 'Fígado de Frango', 'Órgão suculento e nutritivo do frango', 1, 3);
        INSERT INTO product VALUES (49, 'Pés de Frango', 'Parte crocante e saborosa do frango', 1, 3);
        INSERT INTO product VALUES (50, 'Galinha Inteira', 'Ave com carne suculenta e sabor marcante', 1, 3);

        -- Carnes de Cordeiro/Carneiro
        INSERT INTO product VALUES (51, 'Perna de Cordeiro', 'Corte suculento e macio do cordeiro', 1, 4);
        INSERT INTO product VALUES (52, 'Costeletas de Cordeiro', 'Corte com osso saboroso do cordeiro', 1, 4);
        INSERT INTO product VALUES (53, 'Paleta de Cordeiro', 'Corte macio e suculento do cordeiro', 1, 4);
        INSERT INTO product VALUES (54, 'Carré de Cordeiro', 'Corte nobre e suculento do cordeiro', 1, 4);
        INSERT INTO product VALUES (55, 'Pernil de Carneiro', 'Corte saboroso e versátil do carneiro', 1, 4);
        INSERT INTO product VALUES (56, 'Lombo de Carneiro', 'Corte macio e suculento do carneiro', 1, 4);
        INSERT INTO product VALUES (57, 'Costela de Carneiro', 'Corte com osso e sabor intenso do carneiro', 1, 4);
        INSERT INTO product VALUES (58, 'Coxa de Carneiro', 'Corte suculento e saboroso do carneiro', 1, 4);
        INSERT INTO product VALUES (59, 'Cabeça de Cordeiro', 'Parte com carne saborosa e textura delicada do cordeiro', 1, 4);
        INSERT INTO product VALUES (60, 'Língua de Cordeiro', 'Órgão macio e saboroso do cordeiro', 1, 4);
        INSERT INTO product VALUES (61, 'Rins de Cordeiro', 'Órgão saboroso e delicado do cordeiro', 1, 4);
        INSERT INTO product VALUES (62, 'Fígado de Cordeiro', 'Órgão rico em nutrientes e sabor marcante do cordeiro', 1, 4);
        INSERT INTO product VALUES (63, 'Cordeiro Inteiro', 'Animal jovem com carne macia e sabor delicado', 1, 4);
        INSERT INTO product VALUES (64, 'Coração de Cordeiro', 'Órgão suculento e saboroso do cordeiro', 1, 4);
        INSERT INTO product VALUES (65, 'Rabo de Cordeiro', 'Parte saborosa e delicada do cordeiro', 1, 4);
        INSERT INTO product VALUES (66, 'Tripa de Cordeiro', 'Parte usada em embutidos e pratos tradicionais', 1, 4);
        INSERT INTO product VALUES (67, 'Pulmão de Cordeiro', 'Órgão suculento e saboroso do cordeiro', 1, 4);
        INSERT INTO product VALUES (68, 'Pé de Cordeiro', 'Parte saborosa e crocante do cordeiro', 1, 4);
        INSERT INTO product VALUES (69, 'Rabo de Carneiro', 'Parte saborosa e suculenta do carneiro', 1, 4);
        INSERT INTO product VALUES (70, 'Peito de Carneiro', 'Corte suculento e macio do carneiro', 1, 4);

        -- Frutos do Mar - Peixes
        INSERT INTO product VALUES (71, 'Salmão', 'Peixe rico em ômega-3 e saboroso', 1, 5);
        INSERT INTO product VALUES (72, 'Robalo', 'Peixe de sabor suave e delicado', 1, 5);
        INSERT INTO product VALUES (73, 'Atum', 'Peixe versátil e nutritivo', 1, 5);
        INSERT INTO product VALUES (74, 'Bacalhau', 'Peixe salgado e saboroso', 1, 5);
        INSERT INTO product VALUES (75, 'Pescada', 'Peixe de carne branca e macia', 1, 5);
        INSERT INTO product VALUES (76, 'Tilápia', 'Peixe de sabor suave e textura firme', 1, 5);
        INSERT INTO product VALUES (77, 'Dourado', 'Peixe de carne suculenta e sabor delicado', 1, 5);
        INSERT INTO product VALUES (78, 'Linguado', 'Peixe de carne macia e sabor suave', 1, 5);
        INSERT INTO product VALUES (79, 'Merluza', 'Peixe de carne branca e sabor suave', 1, 5);
        INSERT INTO product VALUES (80, 'Cação', 'Peixe de carne firme e sabor marcante', 1, 5);

        -- Frutos do Mar - Mariscos
        INSERT INTO product VALUES (81, 'Camarão', 'Marisco de sabor delicado e textura suculenta', 1, 6);
        INSERT INTO product VALUES (82, 'Lagosta', 'Marisco de sabor exótico e requintado', 1, 6);
        INSERT INTO product VALUES (83, 'Vieiras', 'Marisco de sabor delicado e textura macia', 1, 6);
        INSERT INTO product VALUES (84, 'Mexilhões', 'Marisco de sabor único e textura macia', 1, 6);
        INSERT INTO product VALUES (85, 'Caranguejo', 'Marisco de sabor suculento e textura firme', 1, 6);
        INSERT INTO product VALUES (86, 'Ostra', 'Marisco de sabor delicado e textura suculenta', 1, 6);
        INSERT INTO product VALUES (87, 'Polvo', 'Marisco de sabor marcante e textura macia', 1, 6);
        INSERT INTO product VALUES (88, 'Lula', 'Marisco de textura macia e sabor suave', 1, 6);
        INSERT INTO product VALUES (89, 'Ourico do Mar', 'Marisco de sabor exótico e textura delicada', 1, 6);
        INSERT INTO product VALUES (90, 'Caviar', 'Ovas de sabor delicado e textura suculenta', 1, 6);
        INSERT INTO product VALUES (91, 'Abalone', 'Marisco de sabor único e textura firme', 1, 6);
        INSERT INTO product VALUES (92, 'Caracol', 'Marisco de sabor suave e textura delicada', 1, 6);
        INSERT INTO product VALUES (93, 'Siri', 'Marisco de sabor marcante e textura firme', 1, 6);
        INSERT INTO product VALUES (94, 'Búzios', 'Marisco de sabor suculento e textura firme', 1, 6);
        INSERT INTO product VALUES (95, 'Berbigão', 'Marisco de sabor delicado e textura suculenta', 1, 6);
        INSERT INTO product VALUES (96, 'Cavaco', 'Marisco de sabor suculento e textura macia', 1, 6);
        INSERT INTO product VALUES (97, 'Caramujo', 'Marisco de sabor suave e textura firme', 1, 6);
        INSERT INTO product VALUES (98, 'Escargot', 'Marisco de sabor marcante e textura macia', 1, 6);
        INSERT INTO product VALUES (99, 'Lagostim', 'Marisco de sabor suculento e textura delicada', 1, 6);
        INSERT INTO product VALUES (100, 'Concha de Vieira', 'Marisco de sabor suculento e textura delicada', 1, 6);

        -- Vegetais de Folhas Verdes
        INSERT INTO product VALUES (101, 'Alface', 'Vegetal fresco e crocante', 1, 7);
        INSERT INTO product VALUES (102, 'Rúcula', 'Vegetal de sabor amargo e picante', 1, 7);
        INSERT INTO product VALUES (103, 'Espinafre', 'Vegetal rico em ferro e nutrientes', 1, 7);
        INSERT INTO product VALUES (104, 'Agrião', 'Vegetal de sabor picante e textura crocante', 1, 7);
        INSERT INTO product VALUES (105, 'Acelga', 'Vegetal de sabor suave e textura crocante', 1, 7);
        INSERT INTO product VALUES (106, 'Couve', 'Vegetal de sabor marcante e textura firme', 1, 7);
        INSERT INTO product VALUES (107, 'Chicória', 'Vegetal de sabor amargo e textura crocante', 1, 7);
        INSERT INTO product VALUES (108, 'Endívia', 'Vegetal de sabor amargo e textura crocante', 1, 7);
        INSERT INTO product VALUES (109, 'Radíchio', 'Vegetal de sabor amargo e textura crocante', 1, 7);
        INSERT INTO product VALUES (110, 'Escarola', 'Vegetal de sabor amargo e textura crocante', 1, 7);
        INSERT INTO product VALUES (111, 'Agrião dágua', 'Vegetal de sabor picante e textura crocante', 1, 7);
        INSERT INTO product VALUES (112, 'Mostarda', 'Vegetal de sabor picante e textura crocante', 1, 7);
        INSERT INTO product VALUES (113, 'Broto de Alfafa', 'Vegetal de sabor suave e textura crocante', 1, 7);
        INSERT INTO product VALUES (114, 'Broto de Feijão', 'Vegetal de sabor suave e textura crocante', 1, 7);
        INSERT INTO product VALUES (115, 'Broto de Brócolis', 'Vegetal de sabor suave e textura crocante', 1, 7);
        INSERT INTO product VALUES (116, 'Broto de Couve', 'Vegetal de sabor suave e textura crocante', 1, 7);
        INSERT INTO product VALUES (117, 'Agrião de água', 'Vegetal de sabor picante e textura crocante', 1, 7);
        INSERT INTO product VALUES (118, 'Trevo', 'Vegetal de sabor suave e textura crocante', 1, 7);
        INSERT INTO product VALUES (119, 'Aipo', 'Vegetal de sabor marcante e textura crocante', 1, 7);
        INSERT INTO product VALUES (120, 'Dente de Leão', 'Vegetal de sabor amargo e textura crocante', 1, 7);

        -- Vegetais de Raízes e Tubérculos
        INSERT INTO product VALUES (121, 'Batata', 'Tubérculo versátil e saboroso', 1, 8);
        INSERT INTO product VALUES (122, 'Cenoura', 'Raiz rica em betacaroteno e sabor doce', 1, 8);
        INSERT INTO product VALUES (123, 'Beterraba', 'Raiz de cor intensa e sabor adocicado', 1, 8);
        INSERT INTO product VALUES (124, 'Rabanete', 'Raiz picante e crocante', 1, 8);
        INSERT INTO product VALUES (125, 'Mandioquinha', 'Raiz de sabor delicado e textura cremosa', 1, 8);
        INSERT INTO product VALUES (126, 'Mandioca', 'Raiz de sabor neutro e textura amilácea', 1, 8);
        INSERT INTO product VALUES (127, 'Batata Doce', 'Tubérculo doce e nutritivo', 1, 8);
        INSERT INTO product VALUES (128, 'Inhame', 'Tubérculo de sabor suave e textura amilácea', 1, 8);
        INSERT INTO product VALUES (129, 'Nabo', 'Raiz de sabor marcante e textura firme', 1, 8);
        INSERT INTO product VALUES (130, 'Gengibre', 'Raiz de sabor picante e aroma intenso', 1, 8);

        -- Vegetais de Caule e Flores
        INSERT INTO product VALUES (131, 'Brócolis', 'Vegetal de sabor suave e textura crocante', 1, 9);
        INSERT INTO product VALUES (132, 'Couve-Flor', 'Vegetal versátil e de sabor suave', 1, 9);
        INSERT INTO product VALUES (133, 'Aspargos', 'Vegetal delicado e saboroso', 1, 9);
        INSERT INTO product VALUES (134, 'Aipo', 'Vegetal de sabor marcante e textura fibrosa', 1, 9);
        INSERT INTO product VALUES (135, 'Alho-Poró', 'Vegetal de sabor suave e textura macia', 1, 9);
        INSERT INTO product VALUES (136, 'Ruibarbo', 'Vegetal de sabor ácido e textura fibrosa', 1, 9);
        INSERT INTO product VALUES (137, 'Espargo de Mar', 'Vegetal marinho de sabor salgado', 1, 9);
        INSERT INTO product VALUES (138, 'Couve-de-Bruxelas', 'Vegetal de sabor levemente amargo e textura firme', 1, 9);
        INSERT INTO product VALUES (139, 'Acelga Chinesa', 'Vegetal de sabor suave e textura crocante', 1, 9);
        INSERT INTO product VALUES (140, 'Taioba', 'Vegetal de sabor amargo e textura mucilaginosa', 1, 9);
        INSERT INTO product VALUES (141, 'Agrião da Terra', 'Vegetal de sabor picante e textura crocante', 1, 9);
        INSERT INTO product VALUES (142, 'Cebolinha', 'Vegetal de sabor suave e aroma marcante', 1, 9);
        INSERT INTO product VALUES (143, 'Salsa', 'Vegetal de sabor refrescante e aroma marcante', 1, 9);
        INSERT INTO product VALUES (144, 'Coentro', 'Vegetal de sabor intenso e aroma marcante', 1, 9);
        INSERT INTO product VALUES (145, 'Manjericão', 'Vegetal de sabor suave e aroma marcante', 1, 9);
        INSERT INTO product VALUES (146, 'Tomilho', 'Erva de sabor intenso e aroma marcante', 1, 9);
        INSERT INTO product VALUES (147, 'Estragão', 'Erva de sabor delicado e aroma marcante', 1, 9);
        INSERT INTO product VALUES (148, 'Lavanda', 'Erva de sabor floral e aroma marcante', 1, 9);
        INSERT INTO product VALUES (149, 'Segurelha', 'Erva de sabor suave e aroma marcante', 1, 9);
        INSERT INTO product VALUES (150, 'Orégano', 'Erva de sabor intenso e aroma marcante', 1, 9);

        -- Vegetais de Frutos
        INSERT INTO product VALUES (151, 'Tomate', 'Fruto suculento e versátil', 1, 10);
        INSERT INTO product VALUES (152, 'Pimentão', 'Fruto de sabor marcante e textura crocante', 1, 10);
        INSERT INTO product VALUES (153, 'Abobrinha', 'Fruto suculento e de sabor suave', 1, 10);
        INSERT INTO product VALUES (154, 'Berinjela', 'Fruto de sabor suave e textura macia', 1, 10);
        INSERT INTO product VALUES (155, 'Pepino', 'Fruto de sabor refrescante e textura crocante', 1, 10);
        INSERT INTO product VALUES (156, 'Abóbora', 'Fruto de sabor adocicado e textura macia', 1, 10);
        INSERT INTO product VALUES (157, 'Quiabo', 'Fruto de sabor suave e textura mucilaginosa', 1, 10);
        INSERT INTO product VALUES (158, 'Pimenta', 'Fruto de sabor picante e aroma marcante', 1, 10);
        INSERT INTO product VALUES (159, 'Jiló', 'Fruto de sabor amargo e textura firme', 1, 10);
        INSERT INTO product VALUES (160, 'Chuchu', 'Fruto de sabor suave e textura crocante', 1, 10);
        INSERT INTO product VALUES (161, 'Tomate Cereja', 'Variedade de tomate pequeno e suculento', 1, 10);
        INSERT INTO product VALUES (162, 'Pimenta Dedo-de-Moça', 'Pimenta de sabor picante e textura suculenta', 1, 10);
        INSERT INTO product VALUES (163, 'Pimenta Malagueta', 'Pimenta de sabor extremamente picante', 1, 10);
        INSERT INTO product VALUES (164, 'Pimenta Habanero', 'Pimenta de sabor picante intenso', 1, 10);
        INSERT INTO product VALUES (165, 'Pimenta Carolina Reaper', 'Pimenta de sabor extremamente picante', 1, 10);
        INSERT INTO product VALUES (166, 'Pimenta Bhut Jolokia', 'Pimenta de sabor picante e aroma marcante', 1, 10);
        INSERT INTO product VALUES (167, 'Pimenta Jalapeño', 'Pimenta de sabor picante e textura crocante', 1, 10);
        INSERT INTO product VALUES (168, 'Pimenta Serrano', 'Pimenta de sabor picante e textura suculenta', 1, 10);
        INSERT INTO product VALUES (169, 'Pimenta Cambuci', 'Pimenta de sabor suave e aroma marcante', 1, 10);
        INSERT INTO product VALUES (170, 'Pimenta Biquinho', 'Pimenta de sabor suave e textura crocante', 1, 10);

        -- Frutas Cítricas
        INSERT INTO product VALUES (171, 'Laranja', 'Fruta cítrica de sabor doce e refrescante', 1, 11);
        INSERT INTO product VALUES (172, 'Limão', 'Fruta cítrica de sabor ácido e refrescante', 1, 11);
        INSERT INTO product VALUES (173, 'Lima', 'Fruta cítrica de sabor ácido e aroma marcante', 1, 11);
        INSERT INTO product VALUES (174, 'Grapefruit', 'Fruta cítrica de sabor amargo e refrescante', 1, 11);
        INSERT INTO product VALUES (175, 'Tangerina', 'Fruta cítrica de sabor doce e aroma delicado', 1, 11);
        INSERT INTO product VALUES (176, 'Bergamota', 'Fruta cítrica de sabor doce e aroma delicado', 1, 11);
        INSERT INTO product VALUES (177, 'Mandarina', 'Fruta cítrica de sabor doce e aroma marcante', 1, 11);
        INSERT INTO product VALUES (178, 'Toranja', 'Fruta cítrica de sabor amargo e aroma marcante', 1, 11);
        INSERT INTO product VALUES (179, 'Pomelo', 'Fruta cítrica de sabor doce e textura suculenta', 1, 11);
        INSERT INTO product VALUES (180, 'Cidra', 'Fruta cítrica de sabor amargo e aroma marcante', 1, 11);

        -- Frutas de Caroço
        INSERT INTO product VALUES (181, 'Pêssego', 'Fruta suculenta de caroço e sabor doce', 1, 12);
        INSERT INTO product VALUES (182, 'Ameixa', 'Fruta suculenta de caroço e sabor adocicado', 1, 12);
        INSERT INTO product VALUES (183, 'Cereja', 'Fruta pequena e suculenta de caroço', 1, 12);
        INSERT INTO product VALUES (184, 'Damasco', 'Fruta de caroço de sabor doce e aroma marcante', 1, 12);
        INSERT INTO product VALUES (185, 'Nectarina', 'Fruta de caroço de sabor doce e textura suculenta', 1, 12);
        INSERT INTO product VALUES (186, 'Ameixa Amarela', 'Variedade de ameixa de sabor doce e aroma delicado', 1, 12);
        INSERT INTO product VALUES (187, 'Cereja Doce', 'Variedade de cereja de sabor doce e textura suculenta', 1, 12);
        INSERT INTO product VALUES (188, 'Pêssego Branco', 'Variedade de pêssego de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (189, 'Ameixa Vermelha', 'Variedade de ameixa de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (190, 'Damasco Roxo', 'Variedade de damasco de sabor doce e aroma intenso', 1, 12);
        INSERT INTO product VALUES (191, 'Nectarina Branca', 'Variedade de nectarina de sabor doce e textura suculenta', 1, 12);
        INSERT INTO product VALUES (192, 'Cereja Ácida', 'Variedade de cereja de sabor ácido e textura suculenta', 1, 12);
        INSERT INTO product VALUES (193, 'Pêssego Amarelo', 'Variedade de pêssego de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (194, 'Ameixa Roxa', 'Variedade de ameixa de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (195, 'Damasco Amarelo', 'Variedade de damasco de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (196, 'Nectarina Vermelha', 'Variedade de nectarina de sabor doce e textura suculenta', 1, 12);
        INSERT INTO product VALUES (197, 'Cereja Amarela', 'Variedade de cereja de sabor doce e textura suculenta', 1, 12);
        INSERT INTO product VALUES (198, 'Pêssego Branco', 'Variedade de pêssego de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (199, 'Ameixa Branca', 'Variedade de ameixa de sabor doce e polpa suculenta', 1, 12);
        INSERT INTO product VALUES (200, 'Damasco Branco', 'Variedade de damasco de sabor doce e polpa suculenta', 1, 12);

        -- Frutas de Bagas
        INSERT INTO product VALUES (201, 'Morango', 'Fruta pequena e suculenta de sabor doce', 1, 13);
        INSERT INTO product VALUES (202, 'Framboesa', 'Fruta pequena e suculenta de sabor doce e ácido', 1, 13);
        INSERT INTO product VALUES (203, 'Mirtilo', 'Fruta pequena e suculenta de sabor doce e azedo', 1, 13);
        INSERT INTO product VALUES (204, 'Amora', 'Fruta pequena e suculenta de sabor doce e ligeiramente ácido', 1, 13);
        INSERT INTO product VALUES (205, 'Groselha', 'Fruta pequena e suculenta de sabor ácido', 1, 13);
        INSERT INTO product VALUES (206, 'Cranberry', 'Fruta pequena e suculenta de sabor ácido e adocicado', 1, 13);
        INSERT INTO product VALUES (207, 'Cereja-do-Rio', 'Fruta pequena e suculenta de sabor doce e ácido', 1, 13);
        INSERT INTO product VALUES (208, 'Espinheiro', 'Fruta pequena e suculenta de sabor ácido e levemente amargo', 1, 13);
        INSERT INTO product VALUES (209, 'Uva-do-Monte', 'Fruta pequena e suculenta de sabor doce e azedo', 1, 13);
        INSERT INTO product VALUES (210, 'Arando', 'Fruta pequena e suculenta de sabor ácido e adocicado', 1, 13);
        INSERT INTO product VALUES (211, 'Açaí', 'Fruta pequena e suculenta de sabor forte e adocicado', 1, 13);
        INSERT INTO product VALUES (212, 'Rubi', 'Fruta pequena e suculenta de sabor doce e levemente ácido', 1, 13);
        INSERT INTO product VALUES (213, 'Cajá', 'Fruta pequena e suculenta de sabor doce e azedo', 1, 13);
        INSERT INTO product VALUES (214, 'Murta', 'Fruta pequena e suculenta de sabor doce e ácido', 1, 13);
        INSERT INTO product VALUES (215, 'Groselha Negra', 'Fruta pequena e suculenta de sabor ácido e adocicado', 1, 13);
        INSERT INTO product VALUES (216, 'Cereja-de-Natal', 'Fruta pequena e suculenta de sabor doce e ácido', 1, 13);
        INSERT INTO product VALUES (217, 'Espinheiro-do-Mar', 'Fruta pequena e suculenta de sabor ácido e levemente amargo', 1, 13);
        INSERT INTO product VALUES (218, 'Groselheira-Negra', 'Fruta pequena e suculenta de sabor ácido e adocicado', 1, 13);
        INSERT INTO product VALUES (219, 'Aronia', 'Fruta pequena e suculenta de sabor ácido e adocicado', 1, 13);
        INSERT INTO product VALUES (220, 'Cereja-Silvestre', 'Fruta pequena e suculenta de sabor doce e ácido', 1, 13);

        -- Frutas Tropicais
        INSERT INTO product VALUES (221, 'Banana', 'Fruta tropical de sabor doce e textura cremosa', 1, 14);
        INSERT INTO product VALUES (222, 'Abacaxi', 'Fruta tropical de sabor ácido e textura fibrosa', 1, 14);
        INSERT INTO product VALUES (223, 'Manga', 'Fruta tropical de sabor doce e polpa suculenta', 1, 14);
        INSERT INTO product VALUES (224, 'Coco', 'Fruta tropical de sabor suave e textura cremosa', 1, 14);
        INSERT INTO product VALUES (225, 'Maracujá', 'Fruta tropical de sabor ácido e aroma intenso', 1, 14);
        INSERT INTO product VALUES (226, 'Goiaba', 'Fruta tropical de sabor doce e aroma suave', 1, 14);
        INSERT INTO product VALUES (227, 'Caju', 'Fruta tropical de sabor agridoce e textura suculenta', 1, 14);
        INSERT INTO product VALUES (228, 'Kiwi', 'Fruta tropical de sabor ácido e textura suculenta', 1, 14);
        INSERT INTO product VALUES (229, 'Pitaya', 'Fruta tropical de sabor suave e textura crocante', 1, 14);
        INSERT INTO product VALUES (230, 'Pitomba', 'Fruta tropical de sabor doce e aroma delicado', 1, 14);
        INSERT INTO product VALUES (231, 'Carambola', 'Fruta tropical de sabor ácido e formato estrelado', 1, 14);
        INSERT INTO product VALUES (232, 'Jambo', 'Fruta tropical de sabor suave e aroma delicado', 1, 14);
        INSERT INTO product VALUES (233, 'Graviola', 'Fruta tropical de sabor doce e aroma marcante', 1, 14);
        INSERT INTO product VALUES (234, 'Acerola', 'Fruta tropical de sabor ácido e rico em vitamina C', 1, 14);
        INSERT INTO product VALUES (235, 'Tamarindo', 'Fruta tropical de sabor ácido e aroma intenso', 1, 14);
        INSERT INTO product VALUES (236, 'Jabuticaba', 'Fruta tropical de sabor doce e polpa suculenta', 1, 14);
        INSERT INTO product VALUES (237, 'Pinha', 'Fruta tropical de sabor doce e aroma suave', 1, 14);
        INSERT INTO product VALUES (238, 'Araticum', 'Fruta tropical de sabor doce e aroma marcante', 1, 14);
        INSERT INTO product VALUES (239, 'Pupunha', 'Fruta tropical de sabor suave e textura cremosa', 1, 14);
        INSERT INTO product VALUES (240, 'Açaí', 'Fruta tropical de sabor forte e antioxidante', 1, 14);

        -- Grãos e Cereais
        INSERT INTO product VALUES (241, 'Arroz', 'Grão versátil e fonte de energia', 1, 15);
        INSERT INTO product VALUES (242, 'Trigo', 'Grão utilizado na produção de farinha e alimentos', 1, 15);
        INSERT INTO product VALUES (243, 'Cevada', 'Grão utilizado em cervejarias e culinária', 1, 15);
        INSERT INTO product VALUES (244, 'Quinoa', 'Grão altamente nutritivo e versátil', 1, 15);
        INSERT INTO product VALUES (245, 'Aveia', 'Grão rico em fibras e utilizado em diversos pratos', 1, 15);
        INSERT INTO product VALUES (246, 'Milho', 'Grão utilizado na culinária e indústria alimentícia', 1, 15);
        INSERT INTO product VALUES (247, 'Sorgo', 'Grão utilizado na alimentação humana e animal', 1, 15);
        INSERT INTO product VALUES (248, 'Centeio', 'Grão utilizado na panificação e culinária', 1, 15);
        INSERT INTO product VALUES (249, 'Millet', 'Grão pequeno e altamente nutritivo', 1, 15);
        INSERT INTO product VALUES (250, 'Trigo Sarraceno', 'Grão sem glúten e altamente nutritivo', 1, 15);

        -- Leguminosas
        INSERT INTO product VALUES (251, 'Feijão', 'Leguminosa rica em proteínas e nutrientes', 1, 16);
        INSERT INTO product VALUES (252, 'Lentilha', 'Leguminosa rica em fibras e ferro', 1, 16);
        INSERT INTO product VALUES (253, 'Grão-de-Bico', 'Leguminosa versátil e rica em proteínas', 1, 16);
        INSERT INTO product VALUES (254, 'Ervilha', 'Leguminosa de sabor suave e versátil', 1, 16);
        INSERT INTO product VALUES (255, 'Fava', 'Leguminosa utilizada na culinária mediterrânea', 1, 16);
        INSERT INTO product VALUES (256, 'Soja', 'Leguminosa rica em proteínas e amplamente utilizada', 1, 16);
        INSERT INTO product VALUES (257, 'Amendoim', 'Leguminosa de sabor amendoado e rico em gorduras saudáveis', 1, 16);
        INSERT INTO product VALUES (258, 'Azuki', 'Leguminosa de sabor doce e utilizado em doces e salgados', 1, 16);
        INSERT INTO product VALUES (259, 'Tremoço', 'Leguminosa de sabor amargo e utilizado como petisco', 1, 16);
        INSERT INTO product VALUES (260, 'Feijão Mungo', 'Leguminosa de sabor suave e utilizado em culinária asiática', 1, 16);

        -- Massas
        INSERT INTO product VALUES (261, 'Espaguete', 'Tipo de massa longa e fina', 1, 17);
        INSERT INTO product VALUES (262, 'Penne', 'Tipo de massa curta e tubular', 1, 17);
        INSERT INTO product VALUES (263, 'Lasanha', 'Tipo de massa larga e plana', 1, 17);
        INSERT INTO product VALUES (264, 'Ravióli', 'Tipo de massa recheada e tradicional da culinária italiana', 1, 17);
        INSERT INTO product VALUES (265, 'Talharim', 'Tipo de massa longa e achatada', 1, 17);
        INSERT INTO product VALUES (266, 'Conchiglie', 'Tipo de massa em formato de concha', 1, 17);
        INSERT INTO product VALUES (267, 'Farfalle', 'Tipo de massa em formato de borboleta', 1, 17);
        INSERT INTO product VALUES (268, 'Fusilli', 'Tipo de massa em formato de espiral', 1, 17);
        INSERT INTO product VALUES (269, 'Canelone', 'Tipo de massa longa e recheada', 1, 17);
        INSERT INTO product VALUES (270, 'Macarrão Instantâneo', 'Tipo de massa rápida e prática de preparar', 1, 17);

        -- Farinhas e Amidos
        INSERT INTO product VALUES (271, 'Farinha de Trigo', 'Farinha versátil utilizada na panificação e culinária', 1, 18);
        INSERT INTO product VALUES (272, 'Farinha de Milho', 'Farinha utilizada em diversas receitas e pratos típicos', 1, 18);
        INSERT INTO product VALUES (273, 'Amido de Milho', 'Amido utilizado como espessante e na confeitaria', 1, 18);
        INSERT INTO product VALUES (274, 'Farinha de Arroz', 'Farinha sem glúten e utilizada em receitas diversas', 1, 18);
        INSERT INTO product VALUES (275, 'Farinha de Mandioca', 'Farinha utilizada na culinária brasileira e indígena', 1, 18);
        INSERT INTO product VALUES (276, 'Polvilho Doce', 'Amido utilizado na culinária brasileira para fazer pães e biscoitos', 1, 18);
        INSERT INTO product VALUES (277, 'Polvilho Azedo', 'Amido utilizado na culinária brasileira para fazer pães e biscoitos', 1, 18);
        INSERT INTO product VALUES (278, 'Fécula de Batata', 'Amido utilizado como espessante e na panificação', 1, 18);
        INSERT INTO product VALUES (279, 'Farinha de Aveia', 'Farinha rica em fibras e utilizada em diversas receitas', 1, 18);
        INSERT INTO product VALUES (280, 'Farinha de Centeio', 'Farinha utilizada na panificação e na culinária europeia', 1, 18);

        -- Laticínios - Leite e Derivados
        INSERT INTO product VALUES (281, 'Leite', 'Produto lácteo essencial para diversas receitas e consumo direto', 1, 19);
        INSERT INTO product VALUES (282, 'Queijo', 'Produto lácteo de diversas variedades e sabores', 1, 19);
        INSERT INTO product VALUES (283, 'Manteiga', 'Produto lácteo utilizado na culinária e para passar no pão', 1, 19);
        INSERT INTO product VALUES (284, 'Iogurte', 'Produto lácteo fermentado e nutritivo', 1, 19);
        INSERT INTO product VALUES (285, 'Coalhada', 'Produto lácteo fermentado de consistência espessa', 1, 19);
        INSERT INTO product VALUES (286, 'Requeijão', 'Produto lácteo cremoso e utilizado em diversas receitas', 1, 19);
        INSERT INTO product VALUES (287, 'Creme de Leite', 'Produto lácteo gorduroso e utilizado em molhos e sobremesas', 1, 19);
        INSERT INTO product VALUES (288, 'Leite Condensado', 'Produto lácteo doce e espesso utilizado em sobremesas', 1, 19);
        INSERT INTO product VALUES (289, 'Leite em Pó', 'Produto lácteo desidratado e utilizado em receitas e como bebida', 1, 19);
        INSERT INTO product VALUES (290, 'Leite de Coco', 'Produto derivado do coco utilizado na culinária asiática e tropical', 1, 19);

        -- Ovos e Produtos de Ovos
        INSERT INTO product VALUES (291, 'Ovos', 'Alimento rico em proteínas e utilizado em diversas receitas', 1, 20);
        INSERT INTO product VALUES (292, 'Ovos Cozidos', 'Ovos cozidos e utilizados em saladas e como lanche', 1, 20);
        INSERT INTO product VALUES (293, 'Ovos Mexidos', 'Ovos mexidos e utilizados como acompanhamento e em sanduíches', 1, 20);
        INSERT INTO product VALUES (294, 'Omelete', 'Preparo de ovos batidos e fritos em frigideira', 1, 20);
        INSERT INTO product VALUES (295, 'Tortilha', 'Preparo de ovos batidos e fritos em forma de disco', 1, 20);
        INSERT INTO product VALUES (296, 'Quiche', 'Torta salgada feita com massa e recheio de ovos e queijo', 1, 20);
        INSERT INTO product VALUES (297, 'Frittata', 'Preparo de ovos batidos e fritos em frigideira e finalizados no forno', 1, 20);
        INSERT INTO product VALUES (298, 'Soufflé', 'Prato leve e aerado feito com ovos batidos', 1, 20);
        INSERT INTO product VALUES (299, 'Pudim', 'Sobremesa cremosa feita com ovos, leite e açúcar', 1, 20);
        INSERT INTO product VALUES (300, 'Mousse', 'Sobremesa aerada feita com ovos, açúcar e creme de leite', 1, 20);

        -- Condimentos Secos
        INSERT INTO product VALUES (301, 'Sal', 'Condimento essencial para realçar o sabor dos alimentos', 1, 21);
        INSERT INTO product VALUES (302, 'Pimenta', 'Condimento utilizado para dar ardência e sabor aos pratos', 1, 21);
        INSERT INTO product VALUES (303, 'Orégano', 'Erva aromática utilizada em pizzas, massas e saladas', 1, 21);
        INSERT INTO product VALUES (304, 'Cominho', 'Especiaria de sabor marcante utilizada em diversas culinárias', 1, 21);
        INSERT INTO product VALUES (305, 'Canela', 'Especiaria doce e aromática utilizada em doces e salgados', 1, 21);
        INSERT INTO product VALUES (306, 'Açafrão', 'Especiaria de cor amarela e sabor marcante', 1, 21);
        INSERT INTO product VALUES (307, 'Páprica', 'Especiaria de sabor doce e picante utilizada em diversas culinárias', 1, 21);
        INSERT INTO product VALUES (308, 'Curry', 'Mistura de especiarias utilizada em pratos indianos', 1, 21);
        INSERT INTO product VALUES (309, 'Gengibre em Pó', 'Especiaria de sabor picante e aroma marcante', 1, 21);
        INSERT INTO product VALUES (310, 'Noz-Moscada', 'Especiaria de sabor forte e aroma característico', 1, 21);

        -- Condimentos Líquidos
        INSERT INTO product VALUES (311, 'Azeite', 'Óleo vegetal extraído da azeitona e utilizado na culinária', 1, 22);
        INSERT INTO product VALUES (312, 'Vinagre', 'Líquido ácido utilizado como conservante e tempero', 1, 22);
        INSERT INTO product VALUES (313, 'Molho de Soja', 'Molho fermentado feito a partir de soja e trigo', 1, 22);
        INSERT INTO product VALUES (314, 'Molho Inglês', 'Molho condimentado utilizado em carnes e molhos', 1, 22);
        INSERT INTO product VALUES (315, 'Molho de Pimenta', 'Molho picante feito com pimentas e vinagre', 1, 22);
        INSERT INTO product VALUES (316, 'Molho de Tomate', 'Molho feito com tomates, utilizado em pizzas e massas', 1, 22);
        INSERT INTO product VALUES (317, 'Molho Barbecue', 'Molho defumado e adocicado utilizado em carnes', 1, 22);
        INSERT INTO product VALUES (318, 'Molho de Mostarda', 'Molho amarelo e picante feito com sementes de mostarda', 1, 22);
        INSERT INTO product VALUES (319, 'Molho Pesto', 'Molho verde feito com manjericão, pinhões e queijo', 1, 22);
        INSERT INTO product VALUES (320, 'Molho de Alho', 'Molho cremoso e aromático feito com alho e óleo', 1, 22);

        -- Molhos e Pastas
        INSERT INTO product VALUES (321, 'Ketchup', 'Molho doce e condimentado feito com tomate e especiarias', 1, 23);
        INSERT INTO product VALUES (322, 'Maionese', 'Molho cremoso feito com óleo, ovos e vinagre', 1, 23);
        INSERT INTO product VALUES (323, 'Mostarda', 'Molho amarelo e picante feito com sementes de mostarda', 1, 23);
        INSERT INTO product VALUES (324, 'Molho de Pimenta', 'Molho picante feito com pimentas e vinagre', 1, 23);
        INSERT INTO product VALUES (325, 'Molho de Soja', 'Molho fermentado feito a partir de soja e trigo', 1, 23);
        INSERT INTO product VALUES (326, 'Molho de Tomate', 'Molho feito com tomates, utilizado em pizzas e massas', 1, 23);
        INSERT INTO product VALUES (327, 'Molho de Alho', 'Molho cremoso e aromático feito com alho e óleo', 1, 23);
        INSERT INTO product VALUES (328, 'Molho de Queijo', 'Molho cremoso e saboroso feito com queijo', 1, 23);
        INSERT INTO product VALUES (329, 'Molho Pesto', 'Molho verde feito com manjericão, pinhões e queijo', 1, 23);
        INSERT INTO product VALUES (330, 'Molho Bechamel', 'Molho branco feito com leite, farinha e manteiga', 1, 23);

        -- Pães e Produtos de Panificação
        INSERT INTO product VALUES (331, 'Pão Francês', 'Pão de formato alongado e crosta dourada', 1, 24);
        INSERT INTO product VALUES (332, 'Baguete', 'Pão longo e fino de origem francesa', 1, 24);
        INSERT INTO product VALUES (333, 'Croissant', 'Pão folhado e amanteigado de origem francesa', 1, 24);
        INSERT INTO product VALUES (334, 'Bolo de Chocolate', 'Bolo fofinho e saboroso feito com cacau', 1, 24);
        INSERT INTO product VALUES (335, 'Pão de Forma', 'Pão retangular e macio, ideal para sanduíches', 1, 24);
        INSERT INTO product VALUES (336, 'Pão Integral', 'Pão feito com farinha integral e rico em fibras', 1, 24);
        INSERT INTO product VALUES (337, 'Bolo de Cenoura', 'Bolo macio e úmido feito com cenoura', 1, 24);
        INSERT INTO product VALUES (338, 'Rosca', 'Pão doce em formato de rosca e coberto com açúcar', 1, 24);
        INSERT INTO product VALUES (339, 'Pão de Queijo', 'Pão de origem brasileira feito com queijo e polvilho', 1, 24);
        INSERT INTO product VALUES (340, 'Bolo de Fubá', 'Bolo típico brasileiro feito com fubá e erva-doce', 1, 24);

        -- Sobremesas e Doces
        INSERT INTO product VALUES (341, 'Bolo de Chocolate', 'Bolo fofinho e saboroso feito com cacau', 1, 25);
        INSERT INTO product VALUES (342, 'Torta de Limão', 'Torta refrescante com recheio de limão e merengue', 1, 25);
        INSERT INTO product VALUES (343, 'Sorvete de Morango', 'Sorvete cremoso com sabor de morango', 1, 25);
        INSERT INTO product VALUES (344, 'Pudim de Leite', 'Sobremesa cremosa e doce feita com leite e açúcar', 1, 25);
        INSERT INTO product VALUES (345, 'Mousse de Chocolate', 'Sobremesa aerada e cremosa com sabor intenso de chocolate', 1, 25);
        INSERT INTO product VALUES (346, 'Torta de Maçã', 'Torta doce e reconfortante com recheio de maçã e canela', 1, 25);
        INSERT INTO product VALUES (347, 'Gelatina de Morango', 'Sobremesa leve e refrescante com sabor de morango', 1, 25);
        INSERT INTO product VALUES (348, 'Brigadeiro', 'Doce brasileiro feito com chocolate e leite condensado', 1, 25);
        INSERT INTO product VALUES (349, 'Beijinho', 'Doce brasileiro feito com coco e leite condensado', 1, 25);
        INSERT INTO product VALUES (350, 'Pavê de Chocolate', 'Sobremesa deliciosa e sofisticada com camadas de biscoito e creme', 1, 25);

        -- Sobremesas e Doces
        INSERT INTO product VALUES (351, 'Bolo de Coco', 'Bolo macio e úmido com sabor de coco', 1, 25);
        INSERT INTO product VALUES (352, 'Torta de Chocolate', 'Torta rica em chocolate, perfeita para os amantes do cacau', 1, 25);
        INSERT INTO product VALUES (353, 'Sorvete de Baunilha', 'Sorvete cremoso com sabor clássico de baunilha', 1, 25);
        INSERT INTO product VALUES (354, 'Pudim de Leite Condensado', 'Sobremesa tradicional e irresistível feita com leite condensado', 1, 25);
        INSERT INTO product VALUES (355, 'Mousse de Morango', 'Sobremesa leve e refrescante com sabor de morango', 1, 25);
        INSERT INTO product VALUES (356, 'Torta de Banana', 'Torta doce e reconfortante com recheio de banana', 1, 25);
        INSERT INTO product VALUES (357, 'Gelatina de Limão', 'Sobremesa leve e cítrica com sabor de limão', 1, 25);
        INSERT INTO product VALUES (358, 'Brigadeiro de Morango', 'Variação do clássico brigadeiro com sabor de morango', 1, 25);
        INSERT INTO product VALUES (359, 'Beijinho de Coco', 'Doce brasileiro feito com coco e leite condensado, uma delícia tradicional', 1, 25);
        INSERT INTO product VALUES (360, 'Pavê de Morango', 'Sobremesa deliciosa e sofisticada com camadas de biscoito e creme de morango', 1, 25);

        -- Bebidas Não Alcoólicas - Refrigerantes
        INSERT INTO product VALUES (361, 'Coca-Cola', 'Refrigerante de sabor único e refrescante', 1, 26);
        INSERT INTO product VALUES (362, 'Pepsi', 'Refrigerante conhecido por seu sabor e ampla distribuição', 1, 26);
        INSERT INTO product VALUES (363, 'Sprite', 'Refrigerante cítrico e refrescante', 1, 26);
        INSERT INTO product VALUES (364, 'Guaraná Antarctica', 'Refrigerante brasileiro de sabor marcante e popular', 1, 26);
        INSERT INTO product VALUES (365, 'Fanta Laranja', 'Refrigerante de laranja com sabor intenso e refrescante', 1, 26);
        INSERT INTO product VALUES (366, 'Fanta Uva', 'Refrigerante de uva com sabor doce e refrescante', 1, 26);
        INSERT INTO product VALUES (367, 'Schweppes Citrus', 'Refrigerante cítrico e levemente amargo', 1, 26);
        INSERT INTO product VALUES (368, 'Sukita', 'Refrigerante de sabor suave e refrescante', 1, 26);
        INSERT INTO product VALUES (369, 'Tubaína', 'Refrigerante brasileiro com sabor tradicional e marcante', 1, 26);
        INSERT INTO product VALUES (370, 'Dolly Guaraná', 'Refrigerante brasileiro de guaraná com sabor doce e intenso', 1, 26);

        -- Bebidas Não Alcoólicas - Sucos
        INSERT INTO product VALUES (371, 'Suco de Laranja', 'Suco natural e refrescante, rico em vitamina C', 1, 27);
        INSERT INTO product VALUES (372, 'Suco de Maçã', 'Suco natural e adocicado, refrescante e nutritivo', 1, 27);
        INSERT INTO product VALUES (373, 'Suco de Uva', 'Suco natural e antioxidante, com sabor característico da fruta', 1, 27);
        INSERT INTO product VALUES (374, 'Suco de Abacaxi', 'Suco natural e tropical, refrescante e levemente ácido', 1, 27);
        INSERT INTO product VALUES (375, 'Suco de Acerola', 'Suco natural e ácido, rico em vitamina C', 1, 27);
        INSERT INTO product VALUES (376, 'Suco de Melancia', 'Suco natural e refrescante, com sabor doce e leve', 1, 27);
        INSERT INTO product VALUES (377, 'Suco de Morango', 'Suco natural e delicioso, com sabor intenso de morango', 1, 27);
        INSERT INTO product VALUES (378, 'Suco de Limão', 'Suco natural e cítrico, refrescante e revitalizante', 1, 27);
        INSERT INTO product VALUES (379, 'Suco de Maracujá', 'Suco natural e tropical, com sabor característico do maracujá', 1, 27);
        INSERT INTO product VALUES (380, 'Suco de Manga', 'Suco natural e exótico, com sabor doce e aroma tropical', 1, 27);

        -- Bebidas Não Alcoólicas - Água e Águas Aromatizadas
        INSERT INTO product VALUES (381, 'Água Mineral', 'Água pura e cristalina, essencial para a hidratação do corpo', 1, 28);
        INSERT INTO product VALUES (382, 'Água com Gás', 'Água carbonatada, refrescante e com leve efervescência', 1, 28);
        INSERT INTO product VALUES (383, 'Água de Coco', 'Água naturalmente doce e refrescante, rica em nutrientes', 1, 28);
        INSERT INTO product VALUES (384, 'Água Aromatizada de Limão', 'Água com sabor refrescante de limão, sem adição de açúcar', 1, 28);
        INSERT INTO product VALUES (385, 'Água Aromatizada de Morango', 'Água com sabor doce e suave de morango, sem adição de açúcar', 1, 28);
        INSERT INTO product VALUES (386, 'Água Aromatizada de Pepino e Hortelã', 'Água com sabor refrescante e revitalizante de pepino e hortelã', 1, 28);
        INSERT INTO product VALUES (387, 'Água Aromatizada de Frutas Vermelhas', 'Água com sabor intenso e frutado de frutas vermelhas, sem adição de açúcar', 1, 28);
        INSERT INTO product VALUES (388, 'Água Aromatizada de Laranja e Gengibre', 'Água com sabor cítrico e picante de laranja e gengibre, sem adição de açúcar', 1, 28);
        INSERT INTO product VALUES (389, 'Água de Côco Aromatizada', 'Água de coco com sabor refrescante e tropical, sem adição de açúcar', 1, 28);
        INSERT INTO product VALUES (390, 'Água Aromatizada de Frutas Tropicais', 'Água com sabor exótico e tropical de frutas tropicais, sem adição de açúcar', 1, 28);

        -- Bebidas Alcoólicas - Vinhos
        INSERT INTO product VALUES (391, 'Vinho Tinto Cabernet Sauvignon', 'Vinho tinto encorpado e robusto, com notas de frutas escuras e especiarias', 1, 29);
        INSERT INTO product VALUES (392, 'Vinho Tinto Merlot', 'Vinho tinto macio e frutado, com notas de frutas vermelhas e baixa acidez', 1, 29);
        INSERT INTO product VALUES (393, 'Vinho Tinto Malbec', 'Vinho tinto rico e encorpado, com notas de frutas maduras e taninos firmes', 1, 29);
        INSERT INTO product VALUES (394, 'Vinho Branco Chardonnay', 'Vinho branco encorpado e amanteigado, com notas de frutas tropicais e baixa acidez', 1, 29);
        INSERT INTO product VALUES (395, 'Vinho Branco Sauvignon Blanc', 'Vinho branco fresco e aromático, com notas cítricas e herbáceas', 1, 29);
        INSERT INTO product VALUES (396, 'Vinho Branco Riesling', 'Vinho branco delicado e aromático, com notas florais e frutadas', 1, 29);
        INSERT INTO product VALUES (397, 'Vinho Rosé Pinot Noir', 'Vinho rosé leve e frutado, com notas de frutas vermelhas e florais', 1, 29);
        INSERT INTO product VALUES (398, 'Vinho Rosé Syrah', 'Vinho rosé encorpado e aromático, com notas de frutas escuras e especiarias', 1, 29);
        INSERT INTO product VALUES (399, 'Espumante Brut', 'Vinho espumante seco e refrescante, com borbulhas finas e persistentes', 1, 29);
        INSERT INTO product VALUES (400, 'Espumante Moscatel', 'Vinho espumante doce e aromático, com notas florais e frutadas', 1, 29);

        -- Bebidas Alcoólicas - Destilados e Cervejas
        INSERT INTO product VALUES (401, 'Whisky Escocês Single Malt', 'Whisky escocês complexo e aromático, envelhecido em barris de carvalho', 1, 30);
        INSERT INTO product VALUES (402, 'Vodka Premium', 'Vodka pura e cristalina, destilada diversas vezes para máxima pureza', 1, 30);
        INSERT INTO product VALUES (403, 'Rum Aged', 'Rum envelhecido em barris de carvalho, com notas de baunilha e especiarias', 1, 30);
        INSERT INTO product VALUES (404, 'Gin London Dry', 'Gin seco e aromático, com notas de zimbro e ervas', 1, 30);
        INSERT INTO product VALUES (405, 'Tequila Reposado', 'Tequila suave e aromática, envelhecida em barris de carvalho por alguns meses', 1, 30);
        INSERT INTO product VALUES (406, 'Cachaça Premium', 'Cachaça artesanal e envelhecida, com notas amadeiradas e complexidade de sabores', 1, 30);
        INSERT INTO product VALUES (407, 'Cerveja IPA', 'Cerveja lupulada e aromática, com amargor pronunciado e notas cítricas', 1, 30);
        INSERT INTO product VALUES (408, 'Cerveja Lager', 'Cerveja leve e refrescante, com aroma suave e sabor equilibrado', 1, 30);
        INSERT INTO product VALUES (409, 'Cerveja Stout', 'Cerveja escura e encorpada, com notas de café, chocolate e malte torrado', 1, 30);
        INSERT INTO product VALUES (410, 'Cerveja Weissbier', 'Cerveja de trigo clara e refrescante, com notas frutadas e condimentadas', 1, 30);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM product
    `);
  }
}
