import fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import multipart from "@fastify/multipart";

import { appRoutes } from "@/routes";

const app = fastify();

app.register(cors);
app.register(multipart, { attachFieldsToBody: true });
app.register(cookie);
app.register(appRoutes);

export { app };
