import { randomUUID } from "crypto";
import { TodosRepository } from "./todos.repository";
import { CreateTodoDTO } from "./types";

export class TodoService {
  constructor(private todoRepository: TodosRepository) {}

  public create = async ({
    hero,
    description,
    userId,
    file,
  }: CreateTodoDTO) => {
    if (!userId) {
      const userId = randomUUID();

      const userCreated = await this.todoRepository.create({
        hero,
        description,
        userId,
      });

      return userCreated;
    }

    const userCreated = await this.todoRepository.create({
      hero,
      description,
      userId,
    });

    return userCreated;
  };
}
