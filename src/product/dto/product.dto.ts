import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  imageURL: string;
}
