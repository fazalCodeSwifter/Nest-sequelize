import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { Messages } from './messages.entity';
import { Op } from "sequelize"

@Injectable()
export class MessagesService {

    async createMessage(senderId: number, reciverId: number, message: string) {

        const createdMessage = await Messages.create({
            senderId,
            reciverId,
            message,
        })

        return createdMessage;
    }

    async getAllMessages(userId1, userId2) {
        const allMessage = await Messages.findAll({
            where: {
                [Op.or]: [
                    { senderId: userId1, reciverId: userId2 },
                    { senderId: userId2, reciverId: userId1 }
                ]
            },
            order: [['created_At', 'ASC']],
            raw: true
        })

        return allMessage;
    }
}
