import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  orders: Array<{
    productId: number;
    quantity: number;
  }>;
}
