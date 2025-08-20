/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async profile(req: any) {

    const data = await User.findOne({
      attributes: [['id', 'userId'], 'username', 'email', 'role'],
      where: {
        id: req.user.id,
      },
      raw: true,
    });

    return data;
  }
}
