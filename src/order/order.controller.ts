import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { OrderService } from './order.service';
import type { CreateOrderDto } from './dto/create-order.dto';
import type { ReadOrderDto } from './dto/read-order.dto';

@Controller()
export class OrderController {
  private logger = new Logger('OrderController');

  constructor(private readonly orderService: OrderService) {}

  @GrpcMethod('OrderService', 'Create')
  create(payload: CreateOrderDto) {
    return this.orderService.create(payload);
  }

  @GrpcMethod('OrderService', 'Read')
  read(payload: ReadOrderDto) {
    return this.orderService.read(payload);
  }
}
