import { IsString } from "class-validator";

export class createMessageDto{
	@IsString()   //validates if content property is a string
	content:string
}

