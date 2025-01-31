// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from '.../src/config/logger.ts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(logger);
  await app.listen(3000);
}
bootstrap();
