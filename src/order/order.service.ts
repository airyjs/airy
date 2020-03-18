import { Injectable, Logger, Inject } from '@nestjs/common';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { ReadOrderDto } from './dto/read-order.dto';

@Injectable()
export class OrderService {
  private logger = new Logger('OrderController');

  constructor(@Inject('ORDERS_REPOSITORY') private ordersRepository: typeof Order) {}

  public create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.create(createOrderDto);
  }

  public async read({ uuid }: ReadOrderDto): Promise<Order> {
    const order = await this.ordersRepository.findByPk(uuid);
    // const order = await Order.findByPk(uuid);
    if (order !== null) {
      return order;
    }
    return {} as Order;
  }
}
