/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import bcrypt from 'bcrypt';
import { CreateRegisterDto } from './dto/register.dto';
import { CreateLoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwt: JwtService;

  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {
    this.jwt = new JwtService({

      secret: this.configService.get<string>("REFRESH_TOKEN_SECRET"),
      signOptions: { expiresIn: "7d" }
    })
  }


  async register(dto: CreateRegisterDto) {
    try {
      const data = await this.userModel.findOne({
        where: {
          email: dto.email,
        },
        raw: true,
      });

      if (data) {
        throw new BadRequestException('this email already exist.');
      }
      const hashPassowrd = await this.hashedPassword(dto.password);

      const userData = await this.userModel.create({
        username: dto.username,
        email: dto.email,
        password: hashPassowrd,
      } as any);

      const plainData = userData.get({ plain: true });

      console.log(plainData);

      return {
        message: 'user create successfully.',
      };
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new BadRequestException(error.message);
    }
  }
  // ----------------- LOGIN SERVICE -------------------

  async login(dto: CreateLoginDto) {
    try {
      const userExist = await this.userModel.findOne({
        where: {
          email: dto.email,
        },
        raw: true,
      });


      if (!userExist) {
        throw new BadRequestException('Invalid Email or Password!');
      }

      const decodePassword = await this.comparePassword(
        dto.password,
        userExist.password,
      );

      if (!decodePassword) {
        throw new BadRequestException('Invalid Email or Password!');
      }

      const token = await this.asignToken({
        id: userExist.id,
        role: userExist.role,
      });

      const refreshToken = await this.asignRefreshToken({
        id: userExist.id
      })

      await this.userModel.update(
        { refreshToken: refreshToken },
        {
          where: {
            id: userExist.id
          }
        }
      )

      return {
        user: {
          userId: userExist.id,
          username: userExist.username,
          email: userExist.email,
          role: userExist.role
        },
        access_token: token,
        refresh_token: refreshToken,
        isAuth: true
      };

    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new BadRequestException(error.message);
    }
  }

  // --------------------------------   PRIVATE METHODS    --------------------------------------
  private async hashedPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  private async comparePassword(
    plainPassword: string,
    hashPassowrd: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashPassowrd);
  }

  async asignToken(payload: {
    id: number;
    role: string;
  }): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }

  async asignRefreshToken(payload: {
    id: number;
  }): Promise<string> {
    return await this.jwt.signAsync(payload)
  }

  async verifyToken(token: string): Promise<any> {
    
    try {
      return await this.jwtService.verifyAsync(token);
      
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('your token is expired');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      } else if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid token');
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new BadRequestException(error.message);
    }
  }

  async verifyRefreshToken(token: string): Promise<any> {

    try {

      return await this.jwt.verifyAsync(token);


    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('your token is expired');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      } else if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid token');
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new BadRequestException(error.message);
    }
  }
}
