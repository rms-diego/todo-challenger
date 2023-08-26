import { PrismaClient } from "@prisma/client";
import { CreateTodoDTO } from "./types";

export class TodosRepository {
  constructor(private prisma: PrismaClient) {}

  public create = async ({ hero, description, userId }: CreateTodoDTO) => {
    const userCreated = await this.prisma.todos.create({
      data: {
        hero,
        description,
        userId: userId!,
      },
    });

    return userCreated;
  };
}
