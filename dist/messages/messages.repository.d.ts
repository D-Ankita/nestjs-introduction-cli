export declare class MessagesRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
    updateMsg(id: string, content: string): Promise<void>;
    deleteMsg(id: string): Promise<void>;
}
