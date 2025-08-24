import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { AuthModule } from 'src/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Messages } from './messages.entity';
import { User } from 'src/auth/user.entity';
import { MessageDto } from './dto/messageDto';

@Module({
  imports: [
    SequelizeModule.forFeature([Messages, User]),
    AuthModule],
  providers: [MessagesService],
  exports: [MessagesService]
})
export class MessagesModule {}
