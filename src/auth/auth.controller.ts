import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRegisterDto } from './dto/register.dto';
import { CreateLoginDto } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
    constructor( private authService: AuthService ){}

    @Post("register")
    @HttpCode(HttpStatus.CREATED)
    register(@Body() dto: CreateRegisterDto){   
        return this.authService.register(dto)
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: CreateLoginDto){
        return this.authService.login(dto)
    }
}
