import { app } from "@/app";
import { env } from "@/env";

const bootstrap = () => {
  app.listen({ port: env.PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) throw new Error(err.message);

    console.log(`Server is running\nLink: ${address}`);
  });
};

bootstrap();
