import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Second data application').setDescription('REST API Documentation').setVersion('1.0.0').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.enableCors();
  await app.listen(PORT).then(() => console.log(`Service running on ${PORT} port`));
}
bootstrap();
