import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Books api')
    .setVersion('1.0')
    .addTag('books')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = configService.get('PORT');
  await app.listen(PORT);
}
bootstrap();
