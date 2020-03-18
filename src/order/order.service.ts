import { Injectable, Logger, Inject } from '@nestjs/common';
import GRPCError from 'grpc-error';
import { status } from 'grpc';

import { CreateOrderDto } from './dto/create-order.dto';
import { ReadOrderDto } from './dto/read-order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  private logger = new Logger('OrderController');

  constructor(@Inject('ORDERS_REPOSITORY') private ordersRepository: typeof Order) {}

  public create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.create(createOrderDto);
  }

  public read({ uuid }: ReadOrderDto): Promise<Order> {
    return this.ordersRepository.findByPk(uuid).then(order => {
      if (order === null) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        throw new GRPCError({ status_code: status.NOT_FOUND });
      }
      return order;
    });
  }
}
