import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from './dto/register.dto';
import { CreateLoginDto, RefreshTokenDto } from './dto/login.dto';
import { Public } from 'src/decorators/public.decorator';
import { UserService } from './user.service';
import { RefreshTokenService } from './refreshtoken.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private refreshToken: RefreshTokenService
  ) {}

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: CreateRegisterDto) {
    return this.authService.register(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: CreateLoginDto) {
    return this.authService.login(dto);
  }

  @Get('profile')
  async profile(@Req() req: any) {
    return await this.userService.profile(req);
  }

  @Public()
  @Post('/refresh')
  refreshTokenMethod(@Body() refreshToken: RefreshTokenDto){
    return this.refreshToken.refreshToken(refreshToken)
  }
}
