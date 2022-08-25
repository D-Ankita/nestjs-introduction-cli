import { Controller,Get,Post,Body,Param,NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.services';
@Controller('messages')
export class MessagesController {
	//create instance of service ..controller will create its dependency on service
	messagesService: MessagesService;
	constructor(){
		this.messagesService = new MessagesService();
	}

	//list all messages
	@Get()
	listMessages(){
		//make sure to return always.. to the caller 
		return this.messagesService.findAll();
	}

	//create a new msg
	@Post()
	createMessage(@Body() body:createMessageDto){
		return this.messagesService.create(body.content)
	}

	//get a msg with ID
	@Get('/:id')
	async getMessage(@Param('id') id:string){
		const message = await this.messagesService.findOne(id);
		
		if(!message){
			throw new NotFoundException('Message not Found');
		}
		return message;

	}
}
