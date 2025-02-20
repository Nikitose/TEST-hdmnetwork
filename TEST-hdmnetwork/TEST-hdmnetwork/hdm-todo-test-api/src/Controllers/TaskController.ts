import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import DeleteTask from '../UseCase/DeleteTask/DeleteTask';
import GetAllTasksUseCase from '../UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import UseCaseFactory from '../UseCase/UseCaseFactory';
import SaveTaskUseCase from '../UseCase/SaveTask/SaveTaskUseCase';
import UpdateTaskUseCase from '../UseCase/UpdateTask/UpdateTaskUseCase';

@Controller()
export default class TaskController {
  constructor(private readonly useCaseFactory: UseCaseFactory) {}

  @Get('/tasks')
  async getAll() {
    return (await this.useCaseFactory.create(GetAllTasksUseCase)).handle();
  }

  @Post('/tasks')
  async create(@Body() dto: SaveTaskDto) {
    const task = await this.useCaseFactory
      .create(SaveTaskUseCase)
      .handle(dto);
    return task;
  }

  @Patch('/tasks/:id')
  async update(@Param('id') id: string, @Body() dto: SaveTaskDto) {
    const updatedTask = await this.useCaseFactory
      .create(UpdateTaskUseCase)
      .handle(Number(id), dto);
    return updatedTask;
  }

  @Delete('/tasks/:id')
  async delete(@Param('id') id: string) {
    return (await this.useCaseFactory.create(DeleteTask)).handle(Number(id));
  }
}
