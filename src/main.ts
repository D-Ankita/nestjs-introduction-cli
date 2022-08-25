import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(   //apply to every single incoming request
    new ValidationPipe()  //applies the ValidationPipe
  )
  await app.listen(3009);
}
bootstrap();
