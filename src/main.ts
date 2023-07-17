import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle("sBoard")
    .setDescription("Документация API")
    .setVersion("1.0.0")
    .addTag("https://github.com/fckngawsm/nest-sBoard")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () =>
    console.log(`Приложение запущено на порту ${PORT}`)
  );
}

start();
