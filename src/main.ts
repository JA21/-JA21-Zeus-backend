import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

 /*  const config = app.get(ConfigService); */

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8500);
}
bootstrap();
