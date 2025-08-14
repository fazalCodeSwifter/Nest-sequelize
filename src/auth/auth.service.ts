import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import bcrypt from 'bcrypt';
import { CreateRegisterDto } from './dto/register.dto';
import { CreateLoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService
  ) { }

  async register(dto: CreateRegisterDto) {

    try {
      const data = await this.userModel.findOne({
        where: {
          email: dto.email
        },
        raw: true
      });


      if (data) {
        throw new BadRequestException("this email already exist.")
      }
      const hashPassowrd = await this.hashedPassword(dto.password)

      await this.userModel.create({
        username: dto.username,
        email: dto.email,
        password: hashPassowrd
      } as any)

      return {
        message: "user create successfully.",
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }

  }

  async login(dto: CreateLoginDto) {
    try {
      const userExist = await this.userModel.findOne({
        where: {
          email: dto.email
        },
        raw: true
      })


      console.log(dto.password);
      

      if(!userExist){
        throw new BadRequestException("Invalid Email or Password!")
      }

      const decodePassword = await this.comparePassword(dto.password, userExist.password)

      if(!decodePassword){
        throw new BadRequestException("Invalid Email or Password!")
      }

      const token = await this.asignToken({id: userExist.id, role: userExist.role})

      return {
        access_token: token
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  // --------------------------------   PRIVATE METHODS    --------------------------------------
  private async hashedPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  private async comparePassword(plainPassword: string, hashPassowrd: string): Promise<boolean>{
    return await bcrypt.compare(plainPassword, hashPassowrd)
  }

  private async asignToken(payload: { id: number, role: string }): Promise<string>{
    return await this.jwtService.signAsync(payload)
  }
}
