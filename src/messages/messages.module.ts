import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.services';
@Module({
  controllers: [MessagesController],
  //providers are the things that can be used as dependencies for other classes
  providers: [MessagesRepository, MessagesService]
})
export class MessagesModule { }
