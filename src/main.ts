import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { GlobalExceptionFilter } from './global-exception.filter';
import { SwaggerModule } from '@nestjs/swagger';
import { configSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: process.env.SESSION_SECRET_KEY,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();

// projeto-poo
