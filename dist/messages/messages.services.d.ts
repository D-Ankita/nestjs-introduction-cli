import { MessagesRepository } from "./messages.repository";
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor(messagesRepo: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
    updateMsg(id: string, content: string): Promise<void>;
    deleteMsg(id: string): Promise<void>;
}
