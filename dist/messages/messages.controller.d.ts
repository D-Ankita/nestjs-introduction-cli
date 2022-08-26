import { createMessageDto } from './dto/create-message.dto';
import { updateMessageDto } from './dto/update-message.dto';
import { MessagesService } from './messages.services';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: createMessageDto): Promise<void>;
    getMessage(id: string): Promise<any>;
    updateMsg(id: string, body: updateMessageDto): Promise<void>;
    deleteMsg(id: string): Promise<void>;
}
