import { ValidationPipe } from '@nestjs/common';
import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { MessagesService } from 'src/messages/messages.service';

@WebSocketGateway({
    cors: {
        origin: "*"
    }
})

export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(private authService: AuthService, private messageService: MessagesService) { }

    @WebSocketServer()
    server: Server;

// ----------------------------- ALL CONNECTIONS HERE -------------------------
    async handleConnection(client: Socket) {
        try {
            const token = client.handshake.auth?.token;
            // console.log("TOKEN AVALIBALE=====", token);
            
            if (!token) {
                client.disconnect()
                return;
            }
            
            const payload = await this.authService.verifyToken(token);
            // console.log(payload);
            
            
            (client as any).user = payload
            client.join(payload.id.toString());
            console.log("socket connected!");
            
        } catch (error) {

            client.emit("unauthorized", { message: error.response.message || "unauthorized!" })
            // client.disconnect();

        }
    }

    handleDisconnect(client: Socket) {
        console.log("CLIENT DISCONNET ==>", client.id);

    }
// ----------------------------- ALL CONNECTIONS HERE END -------------------------

// ----------------- ALLCEVENT LISTENER CONTROLLER ---------------------------------

    @SubscribeMessage('sent_message')
    async handleMessage(
        @MessageBody() data: { senderId: number, reciverId:number, message: string },
        @ConnectedSocket() client: Socket
    ) {
        
        const message = await this.messageService.createMessage(
            data.senderId,
            data.reciverId,
            data.message
        )
        
        client.to(data.reciverId.toString()).emit("received_message", message)
        const callback = (client as any).ack;
        
        return message;
    }

    @SubscribeMessage('get_user_messages')
    async handleEvent(
        @MessageBody() data: { userId: number },
        @ConnectedSocket() client: Socket
    ) {
        const currentUser = (client as any).user

      const getAllMessage = await this.messageService.getAllMessages(
        currentUser.id,
        data.userId
      )

      client.emit("user_messages", getAllMessage)

    }
}
