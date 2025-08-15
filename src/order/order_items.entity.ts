import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Order } from './order.entity';
import { Product } from 'src/product/product.entity';

interface OrderItemsModelAttributes {
  orderId?: number;
  productId?: number;
  quantity?: number;
  productPrice?: number;
  totaltPrice?: number;
}

@Table({ tableName: 'Order_Items', timestamps: false })
export class Order_items extends Model<OrderItemsModelAttributes> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @Column({ type: DataType.INTEGER.UNSIGNED, allowNull: false })
  quantity!: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  productPrice!: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  totalPrice!: number;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Product)
  product: Product;
}
