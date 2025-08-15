import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from 'src/auth/user.entity';
import { Order_items } from './order_items.entity';

interface OrderModelAttributes {
  // id?: number;
  userId: number;
}

@Table({ tableName: 'Orders', timestamps: false })
export class Order extends Model<OrderModelAttributes> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({ field: 'createdAt' })
  declare createdAt: Date;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Order_items)
  orderItems: Order_items;
}
