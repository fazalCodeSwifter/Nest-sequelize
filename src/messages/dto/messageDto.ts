import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class MessageDto {

    @IsNotEmpty()
    @IsInt()
    senderId: number;

    @IsNotEmpty()
    @IsInt()
    reciverId: number;

    @IsNotEmpty()
    @IsString()
    @Min(1)
    message: string;
}