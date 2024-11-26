import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,{
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:123456@10.136.62.152:5672/provaciclo2'],
      queue: 'fila-banco'
    }
  });
  await app.listen()
}
bootstrap();