import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './product.entity';
import { InjectRedis } from "@nestjs-modules/ioredis"
import Redis from 'ioredis';

@Injectable()
export class ProductService {

  constructor(@InjectRedis() private redis: Redis){}

  async createProduct(dto: CreateProductDto) {
    const createProductData = await Product.create({
      title: dto.title,
      description: dto.description,
      price: dto.price,
      imageURL: dto.imageURL,
    });
    return createProductData;
  }

  // updateProduct(dto: CreateProductDto) {
  //   console.log(dto);
  // }

  // deleteProduct() {}

  async getProducts() {

    const cacheProduct = await this.redis.get("products")
    if(cacheProduct){
      console.log("Redis Hit ====>");
      
      return JSON.parse(cacheProduct);
    }

    console.log("Redis caching ...");

    const getAllProducts = await Product.findAll()

    await this.redis.setex("products", (60 * 60 * 2),JSON.stringify(getAllProducts))

    return getAllProducts;
  }

  // getSingleProduct() {}
}
