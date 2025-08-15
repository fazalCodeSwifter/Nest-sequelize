import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';

@Controller('api')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('orders')
  @HttpCode(HttpStatus.CREATED)
  createOrder(@Req() req: any, @Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(req, dto);
  }

  @Get('orders')
  getOrders() {
    return this.orderService.getOrders();
  }
}
