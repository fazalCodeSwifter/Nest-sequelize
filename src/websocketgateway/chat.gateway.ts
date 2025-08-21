import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';

@WebSocketGateway({
    cors: {
        origin: "*"
    }
})

export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(private authService: AuthService) { }

    @WebSocketServer()
    server: Server;

    private messages: string[] = [];

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
            console.log("socket connected!");
            
        } catch (error) {

            client.emit("unauthorized", { message: error.response.message || "unauthorized!" })
            // client.disconnect();

        }
    }

    handleDisconnect(client: Socket) {
        console.log("CLIENT DISCONNET ==>", client.id);

    }

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        console.log('Received:', message);

        this.messages.push(message);

        this.server.emit('messages', this.messages);
    }
}
