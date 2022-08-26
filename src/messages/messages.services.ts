import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesService{
	constructor(public messagesRepo:MessagesRepository){
		}

	findOne(id:string){
		//service turnaround and call the identical method from Repo
		return this.messagesRepo.findOne(id);
	}

	findAll(){
		return this.messagesRepo.findAll();
	}

	create(content:string){
		return this.messagesRepo.create(content);
	}

	updateMsg(id:string, content:string){
		console.log("in services - updatemsg");
		return this.messagesRepo.updateMsg(id,content)
	}
}
