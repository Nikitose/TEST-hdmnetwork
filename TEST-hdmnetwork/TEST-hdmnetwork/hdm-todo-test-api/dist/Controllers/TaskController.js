"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const DeleteTask_1 = require("../UseCase/DeleteTask/DeleteTask");
const GetAllTasksUseCase_1 = require("../UseCase/GetAllTasks/GetAllTasksUseCase");
const SaveTaskDto_1 = require("../UseCase/SaveTask/SaveTaskDto");
const UseCaseFactory_1 = require("../UseCase/UseCaseFactory");
let TaskController = class TaskController {
    constructor(useCaseFactory) {
        this.useCaseFactory = useCaseFactory;
    }
    async getAll() {
        return (await this.useCaseFactory.create(GetAllTasksUseCase_1.default)).handle();
    }
    async create(dto) {
    }
    async update(dto) {
    }
    async delete(id) {
        return (await this.useCaseFactory.create(DeleteTask_1.default)).handle(Number(id));
    }
};
__decorate([
    (0, common_1.Get)('/tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/tasks'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SaveTaskDto_1.default]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/tasks/:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SaveTaskDto_1.default]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/tasks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
TaskController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [UseCaseFactory_1.default])
], TaskController);
exports.default = TaskController;
//# sourceMappingURL=TaskController.js.map