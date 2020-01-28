import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.enableCors(); // for activate cors
    await app.listen(process.env.PORT);
}

bootstrap();
