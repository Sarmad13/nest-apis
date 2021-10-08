/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { identity } from 'rxjs';
import { productService } from './Products.service';

@Controller('products')
export class productsController {
  constructor(private readonly productsService: productService) {}

  @Get('productList')
  getProducts() {
    return this.productsService.getProducts();
  }
  @Get(':id')
  getProductById(@Param('id') prodId: string) {
    return this.productsService.getProductById(prodId);
  }
  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    return this.productsService.deleteProductById(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: string,
  ) {
    return this.productsService.updateProductById(
      prodId,
      prodTitle,
      prodDesc,
      prodPrice,
    );
  }
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    console.log(generatedId);
    return { id: generatedId };
  }
}
