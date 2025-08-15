import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  async createProduct(dto: CreateProductDto) {
    const createProductData = await Product.create({
      title: dto.title,
      description: dto.description,
      price: dto.price,
      imageURL: dto.imageURL,
    });
    return createProductData;
  }

  updateProduct(dto: CreateProductDto) {
    console.log(dto);
  }

  deleteProduct() {}

  getProducts() {}

  getSingleProduct() {}
}
