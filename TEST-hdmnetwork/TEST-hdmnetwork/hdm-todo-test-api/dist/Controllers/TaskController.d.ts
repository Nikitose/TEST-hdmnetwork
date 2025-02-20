import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import UseCaseFactory from '../UseCase/UseCaseFactory';
export default class TaskController {
    private readonly useCaseFactory;
    constructor(useCaseFactory: UseCaseFactory);
    getAll(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(dto: SaveTaskDto): Promise<void>;
    update(dto: SaveTaskDto): Promise<void>;
    delete(id: string): Promise<boolean>;
}
