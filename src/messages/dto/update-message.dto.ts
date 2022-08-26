import { IsString } from "class-validator";

export class updateMessageDto{
	@IsString()   //validates if content property is a string
	content:string
}


