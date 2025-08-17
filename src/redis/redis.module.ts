import { Global, Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';

@Global()
@Module({
    imports: [
        RedisModule.forRoot({
            type: "single",
            url: "localhost:6379"
        })
    ],
    exports: [RedisModule]
})
export class RedisGlobalModule {}
