import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { Exception } from "./Exception";

export const errorHandler = async (
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  if (error instanceof Exception) {
    return reply.status(error.statusCode).send({ error: error.message });
  }

  return reply.status(400).send({ error: error.message });
};
