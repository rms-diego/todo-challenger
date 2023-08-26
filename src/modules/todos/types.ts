import { z as zod } from "zod";

// create User types
export const createTodoSchema = zod.object({
  hero: zod.object({
    value: zod.string(),
  }),
  description: zod.object({
    value: zod.string(),
  }),
});

export interface CreateTodoDTO {
  hero: string;
  description: string;
  userId?: string;
  file?: Buffer;
}
