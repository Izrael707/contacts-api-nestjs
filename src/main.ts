import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config} from 'dotenv';
import { resolve } from 'path';

config({path: resolve(__dirname,'../.env')})
const port = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(port);
}
bootstrap();
