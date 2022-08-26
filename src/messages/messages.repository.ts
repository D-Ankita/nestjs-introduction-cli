import { readFile, writeFile } from "fs/promises";
import { Delete, Injectable } from "@nestjs/common";
@Injectable()
export class MessagesRepository{
	async findOne(id:string){
		const contents = await readFile('messages.json','utf-8');
		const messages = JSON.parse(contents);

		return messages[id]
	}

	async findAll(){
		const contents = await readFile('messages.json','utf-8');
		const messages = JSON.parse(contents);

		return messages

	}

	async create(content:string){
		const contents = await readFile('messages.json', 'utf-8');
		const messages = JSON.parse(contents);

		const id =  Math.floor(Math.random()*999);
		// $id { id: "$id" , contents:"$message"}
		messages[id]={id,content};
		await writeFile('messages.json',JSON.stringify(messages));
	}

	async updateMsg(id:string, content:string){
		console.log("in repo - updatemsg");
		//read the file
		const contents = await readFile('messages.json','utf-8');
		//convert to json
		const messages = JSON.parse(contents)
		// find the data associated with id 
		console.log(messages[id]);
		//update the contents using the incoming content
		messages[id]["content"] = content
		console.log("after update",messages[id]);
		//write back to the file
		await writeFile('messages.json',JSON.stringify(messages))
		// return messages
	}

	async deleteMsg(id:string){
		console.log("in delete Msg");
		//read the existing file
		const contents = await readFile('messages.json', 'utf-8');
		//convert to json object 
		const messages = JSON.parse(contents)
		//find the mesage associated with the id
		console.log(messages[id])
		//delete the object
		delete messages[id]
		console.log("after delete", messages[id]);
		//write back to the file
		await writeFile('messages.json', JSON.stringify(messages))
		
	}


}