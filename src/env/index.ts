import "dotenv/config";
import { z as zod } from "zod";

const envSchema = zod.object({
  PORT: zod.coerce.number(),
  DATABASE_URL: zod.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  const message = _env.error.toString();

  throw new Error(message);
}

export const env = _env.data;
