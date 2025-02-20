import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import SaveTaskDto from './SaveTaskDto';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, SaveTaskDto> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    try {
      return this.taskRepository.create(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
