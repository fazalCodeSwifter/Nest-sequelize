/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Op } from "sequelize"
import { Follower } from './followers.entity';

@Injectable()
export class UserService {
  async profile(req: any) {

    const data: any = await User.findOne({
      attributes: [['id', 'userId'], 'username', 'email', 'role'],
      where: {
        id: req.user.id,
      },
      include: [
        {
          attributes: ['followerId', 'followingId'],
          model: Follower,
          as: "following",
          required: false,
          include: [{
            attributes: [['id', 'userId'], 'username', 'email'],
            model: User,
            as: "followingUser"
          }]
        },
        {
          attributes: ['followerId', 'followingId'],

          model: Follower,
          as: "followers",
          required: false,
          include: [{
            attributes: [['id', 'userId'], 'username', 'email'],
            model: User,
            as: "followerUser"
          }]
        },
      ],
    });


    return data;
  }

  async getAllUsers(req: any) {

    const allUsers = await User.findAll({
      where: {
        id: { [Op.ne]: req.user.id }
      },
      attributes: [['id', 'userId'], 'username', 'email', 'role'],
      raw: true,
    });

    return allUsers;
  }


  async followingUser(req: any) {

    const following = await Follower.findAll({

      where: { followerId: req.user.id },
      attributes: ['followingId'],
      raw: true,
    });
    const followingIds = following.map(f => f.followingId);

    // console.log("ALL FOLLOWINGS IDs--", following);
    // console.log("FINDS FOLLOWINGS IDs--", followingIds);


    const followers = await Follower.findAll({
      where: { followingId: req.user.id },
      attributes: ['followerId'],
      raw: true,
    });
    const followerIds = followers.map(f => f.followerId);

    // console.log("ALL FOLLOWERS IDs--", followers);
    // console.log("FINDS FOLLOWERS IDs--", followerIds);
    

     const friendIds = followingIds.filter(id => followerIds.includes(id));

    // console.log("FINDS FRIENDS IDs--", friendIds);
     

      const friends = await User.findAll({
      where: { id: friendIds },
      attributes: [['id','userId'], 'username', 'email'],
    });

    // console.log("FINDS FRIENDS--", friends);
    
    return friends

  }

}
