import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins: Array<string> = ["http://localhost:3000"];
  app.enableCors({
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  });

  await app.listen(8080);
}
bootstrap();
