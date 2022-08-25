import { MessagesRepository } from "./messages.repository";
export class MessagesService{
	messagesRepo : MessagesRepository
	constructor(){
		//service is creating its own dependency
		//MessagesRepository is the dependency of the MessagesService
		//Dependency injection will be used for this purpose further.
		this.messagesRepo = new MessagesRepository();
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
}
