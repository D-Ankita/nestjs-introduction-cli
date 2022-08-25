import { createMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.services';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: createMessageDto): Promise<void>;
    getMessage(id: string): Promise<any>;
}
