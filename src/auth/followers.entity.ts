import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from 'src/auth/user.entity';

@Table({ tableName: 'UserFollowings', timestamps: false })
export class Follower extends Model<Follower> {
  
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  followerId!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  followingId!: number;

    // Jo user follow kar raha hai
  @BelongsTo(() => User, 'followerId')
  followerUser!: User;

  // Jo user follow ho raha hai
  @BelongsTo(() => User, 'followingId')
  followingUser!: User;
}
