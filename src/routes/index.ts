import { FastifyInstance } from "fastify";
import { todoRoutes } from "@/modules/todos/routes";

export const appRoutes = async (app: FastifyInstance) => {
  app.register(todoRoutes, { prefix: "/todo" });
};
