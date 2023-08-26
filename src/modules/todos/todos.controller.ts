import { FastifyReply, FastifyRequest } from "fastify";
import { TodoService } from "./todos.service";
import { createTodoSchema } from "./types";

export class TodoController {
  public constructor(private todoService: TodoService) {}

  public create = async (request: FastifyRequest, reply: FastifyReply) => {
    const {
      hero: { value: hero },
      description: { value: description },
    } = createTodoSchema.parse(request.body);

    const { userId } = request.cookies;

    if (!userId) {
      const userCreated = await this.todoService.create({
        hero,
        description,
      });

      reply.setCookie("userId", userCreated?.userId!);

      return { userCreated };
    }

    const userCreated = await this.todoService.create({
      hero,
      description,
      userId,
    });

    return { userCreated };
  };
}
