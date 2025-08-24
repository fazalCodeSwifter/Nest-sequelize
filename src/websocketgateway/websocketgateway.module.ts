import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { MessagesModule } from 'src/messages/messages.module';

@Module({
    imports: [AuthModule, MessagesModule],
    providers: [ChatGateway],
    exports: [ChatGateway]
})
export class WebsocketgatewayModule {}
