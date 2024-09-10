import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('Documentação API - Central de Compras')
  .setDescription(
    'Bem-vindo à documentação da API da Central de Compras. Esta API fornece endpoints para gerenciar as operações do aplicativo. Abaixo você encontrará detalhes sobre os diferentes endpoints disponíveis, os métodos suportados, e os parâmetros necessários.',
  )
  .setVersion('1.0')
  .build();
