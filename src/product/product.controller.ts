import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('api')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('products')
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  // @Put('products')
  // @HttpCode(HttpStatus.OK)
  // updateProduct(@Body() dto: CreateProductDto) {
  //   return this.productService.updateProduct(dto);
  // }

  // @Delete('products/:id')
  // @HttpCode(HttpStatus.OK)
  // deleteProduct() {
  //   return this.productService.deleteProduct();
  // }

  @Public()
  @Get('products')
  @HttpCode(HttpStatus.OK)
  getProducts() {
    return this.productService.getProducts();
  }

  // @Get('products/:id')
  // @HttpCode(HttpStatus.OK)
  // getSingleProduct() {
  //   return this.productService.getSingleProduct();
  // }
}
