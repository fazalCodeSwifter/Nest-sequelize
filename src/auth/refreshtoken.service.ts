import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RefreshTokenDto } from "./dto/login.dto";
import { InjectModel } from '@nestjs/sequelize';
import { User } from "./user.entity";


@Injectable()
export class RefreshTokenService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        private authService: AuthService) { }

    async refreshToken(token: RefreshTokenDto) {

        const decode = await this.authService.verifyRefreshToken(token.refreshToken)


        const isLoggedInUser = await this.userModel.findOne({
            where: {
                id: decode.id
            },
            raw: true
        });

        if (!isLoggedInUser?.refreshToken) {
            throw new BadRequestException("please login to continue...")
        }

        const dbDecodeToken = await this.authService.verifyRefreshToken(isLoggedInUser?.refreshToken)

        const genrateNewAccessToken = await this.authService.asignToken({
            id: isLoggedInUser.id,
            role: isLoggedInUser.role
        })

        const genrateNewRefreshToken = await this.authService.asignRefreshToken({
            id: isLoggedInUser.id
        })

        await this.userModel.update(
            { refreshToken: genrateNewRefreshToken },
            {
                where: {
                    id: isLoggedInUser.id
                }
            }
        )

        return {
            user: {
                userId: isLoggedInUser.id,
                username: isLoggedInUser.username,
                email: isLoggedInUser.email,
                role: isLoggedInUser.role
            },
            access_token: genrateNewAccessToken,
            refresh_token: genrateNewRefreshToken,
            isAuth: true
        }


    }
}