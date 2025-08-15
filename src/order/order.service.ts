/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { Sequelize } from 'sequelize-typescript';
import { Order } from './order.entity';
import { Product } from 'src/product/product.entity';
import { Order_items } from './order_items.entity';
import { User } from 'src/auth/user.entity';

interface IOrderObj {
  orderId: number;
  productId: number;
  quantity: number;
  productPrice: number;
  totalPrice: number;
}

@Injectable()
export class OrderService {
  constructor(private sequelize: Sequelize) {}
  async createOrder(req: any, dto: CreateOrderDto) {
    return await this.sequelize.transaction(async (transaction) => {
      const orderId: Order = await Order.create(
        {
          userId: req.user.id,
        },
        { transaction },
      );
      const plainOrderId: any = orderId.get({ plain: true });

      const _orderData: IOrderObj[] = [];
      for (const item of dto.orders) {
        const productData: any = await Product.findOne({
          attributes: ['price'],
          where: {
            id: item.productId,
          },
          raw: true,
        });

        _orderData.push({
          orderId: plainOrderId.id,
          productId: item.productId,
          quantity: item.quantity,
          productPrice: productData.price,
          totalPrice: item.quantity * productData.price,
        });
      }

      await Order_items.bulkCreate(_orderData, { transaction });

      return {
        message: 'Order Create successfully!',
      };
    });
  }

  async getOrders() {
    const allOrders = await Order.findAll({
      attributes: [['id', 'orderID'], 'userId'],
      include: [
        {
          attributes: { exclude: ['orderId', 'productId'] },
          model: Order_items,
          required: true,
          include: [
            {
              model: Product,
              required: true,
            },
          ],
        },
        {
          attributes: { exclude: ['password', 'createdAt'] },
          model: User,
          required: true,
        },
      ],
    });

    return allOrders;
  }
}
