import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './auth/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.entity';
import { Product } from './product/product.entity';
import { Order_items } from './order/order_items.entity';
import { RedisGlobalModule } from './redis/redis.module';
import { WebsocketgatewayModule } from './websocketgateway/websocketgateway.module';
import { MessagesModule } from './messages/messages.module';
import { Messages } from './messages/messages.entity';
import { Follower } from './auth/followers.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        models: [User, Order, Product, Order_items, Messages, Follower],
        autoLoadModels: true,
        synchronize: false,
        logging: false,
      }),
    }),
    AuthModule,
    ProductModule,
    OrderModule,
    RedisGlobalModule,
    WebsocketgatewayModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
