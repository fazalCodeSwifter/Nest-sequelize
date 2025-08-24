import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/auth/user.entity';

interface MessagesModelAttributes {
  senderId?: number;
  reciverId?: number;
  message?: string;
}

@Table({ tableName: 'Messages', timestamps: false })
export class Messages extends Model<MessagesModelAttributes> {
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
  senderId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  reciverId: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  message!: string;


  @BelongsTo(() => User, 'senderId')
  sender: User;

  @BelongsTo(() => User, 'reciverId')
  reciver: User;
}
