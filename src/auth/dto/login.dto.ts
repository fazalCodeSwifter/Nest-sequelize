import { IsEmail, IsNotEmpty, IsString, MinLength, Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ async: false })
class IsValidPasswordValidator implements ValidatorConstraintInterface {
    validate(password: string, args: ValidationArguments) {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return strongPasswordRegex.test(password);
    }
    defaultMessage(args: ValidationArguments): string {
        return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }
}


export class CreateLoginDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Validate(IsValidPasswordValidator)
    password: string;
}


export class RefreshTokenDto{

    @IsString()
    @IsNotEmpty()
    refreshToken: string;
}

