import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import SaveTaskDto from '../SaveTask/SaveTaskDto';

@Injectable()
export default class UpdateTaskUseCase implements UseCase<Promise<Task>, [number, SaveTaskDto]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(id: number, dto: SaveTaskDto): Promise<Task> {
    try {
      return this.taskRepository.update(id, dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
