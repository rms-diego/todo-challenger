import { FastifyInstance } from "fastify";
import { TodoController } from "./todos.controller";
import { TodoService } from "./todos.service";
import { TodosRepository } from "./todos.repository";
import { prismaClient } from "@/shared/database";

const todoRepository = new TodosRepository(prismaClient);
const todoService = new TodoService(todoRepository);
const todosController = new TodoController(todoService);

export const todoRoutes = async (app: FastifyInstance) => {
  app.post("/create", todosController.create);
};
