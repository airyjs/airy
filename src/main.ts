import { join } from 'path';
import { Logger } from '@nestjs/common';

import type { GrpcOptions } from '@nestjs/microservices';

import { Airy } from './core/airy/airy.microservice';
import { OrderModule } from './order/order.module';

const logger = new Logger('Main');

const grpcOptions: GrpcOptions = {
  options: {
    package: 'airy.storage',
    url: 'localhost:3000',
    protoPath: join(__dirname, '../src/order/order.proto'),
  },
};

async function bootstrap() {
  const airy = new Airy(grpcOptions);
  const app = await airy.createMicroservice(OrderModule);
  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
