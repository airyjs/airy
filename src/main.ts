import { join } from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, GrpcOptions } from '@nestjs/microservices';

import { OrderModule } from './order/order.module';

const logger = new Logger('Main');

const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'airy.storage',
    url: 'localhost:3000',
    protoPath: join(__dirname, '../src/order/order.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(OrderModule, microserviceOptions);
  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
