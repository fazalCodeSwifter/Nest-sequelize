import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}),
      SequelizeModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          dialect: "mysql",
          host: config.get<string>("DB_HOST"),
          port: config.get<number>("DB_PORT"),
          username: config.get<string>("DB_USER"),
          password: config.get<string>("DB_PASS"),
          database: config.get<string>("DB_NAME"),
          models: [User],
          autoLoadModels: true,
          synchronize: false,
          logging: false
        })
      })
    ,AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
