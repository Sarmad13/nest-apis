/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { productsController } from './Products.controller';
import { productService } from './Products.service';

@Module({
  controllers: [productsController],
  providers: [productService],
})
export class ProductsModule {}
