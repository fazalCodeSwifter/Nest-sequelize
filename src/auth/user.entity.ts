import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  HasMany,
} from 'sequelize-typescript';
import { Order } from 'src/order/order.entity';
import { Messages } from "src/messages/messages.entity";
import { Follower } from './followers.entity';

@Table({ tableName: 'Users', timestamps: false })
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  username!: string;

  @Unique
  @Column({ type: DataType.STRING(150), allowNull: false })
  email!: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  password!: string;

  @Column({
    type: DataType.ENUM('admin', 'customer'),
    defaultValue: 'customer',
  })
  role!: string;

  @Column({
    type: DataType.STRING,
    allowNull:true,
    defaultValue: null
  })
  refreshToken!: string;

  @Column({ field: 'createdAt' })
  declare createdAt: Date;

  @HasMany(() => Order)
  orders: Order;

  @HasMany(() => Messages, 'senderId')
  sentMessages: Messages[];

  @HasMany(() => Messages, 'reciverId')
  recivedMessages: Messages[];

  @HasMany(() => Follower, 'followerId')
  following: Follower[];  // ye users jo mai follow kar raha hoon

  @HasMany(() => Follower, 'followingId')
  followers: Follower[];  // ye users jo mujhe follow kar rahe hain

}
