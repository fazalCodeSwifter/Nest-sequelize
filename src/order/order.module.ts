import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.entity';
import { Order_items } from './order_items.entity';
import { User } from 'src/auth/user.entity';
import { Product } from 'src/product/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([Order, Order_items, User, Product])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
