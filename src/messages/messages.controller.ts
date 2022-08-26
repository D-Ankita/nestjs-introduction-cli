import { Controller,Get,Post,Body,Param,NotFoundException, Put, Patch, Delete } from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';
import { updateMessageDto } from './dto/update-message.dto';
import { MessagesService } from './messages.services';
@Controller('messages')
export class MessagesController {
	//create instance of service ..controller will create its dependency on service
	constructor(public messagesService: MessagesService){
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
		console.log(id);
		
		const message = await this.messagesService.findOne(id);
		
		if(!message){
			throw new NotFoundException('Message not Found');
		}
		return message;

	}

	//edit the task with id
	@Patch('/:id')
	async updateMsg(@Param('id') id:string, @Body() body:updateMessageDto ){
		
		console.log("in controller - body",body);
		return this.messagesService.updateMsg(id, body.content)
	}

	//delete a specific id
	@Delete('/:id')
	async deleteMsg(@Param('id') id:string){
		return this.messagesService.deleteMsg(id)
	}


}
