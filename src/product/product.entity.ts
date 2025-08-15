import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Order_items } from 'src/order/order_items.entity';

interface ProductModelAttributes {
  id?: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
}

@Table({ tableName: 'Products', timestamps: false })
export class Product extends Model<ProductModelAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({ type: DataType.STRING(255), allowNull: false })
  title!: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  description!: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price!: number;

  @Column({ type: DataType.STRING(255), allowNull: false })
  imageURL!: string;

  @Column({ field: 'createdAt' })
  declare createdAt: Date;

  @HasMany(() => Order_items)
  order_items: Order_items;
}
