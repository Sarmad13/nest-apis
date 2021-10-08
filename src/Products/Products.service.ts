/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './Product.model';

@Injectable()
export class productService {
  products: Product[] = [];

  getProducts(): Product[] {
    return [...this.products];
  }
  deleteProductById(id) {
    const delProduct = this.findProduct(id);
    if (delProduct) {
      return (this.products = this.products.filter((prod) => prod.id !== id));
    }
    return null;
  }
  updateProductById(id, title, description, price) {
    const product = this.findProduct(id);
    // const updatedProduct = Object.create(product);
    if (title) {
      product.title = title;
    }
    if (description) {
      product.description = description;
    }
    if (price) {
      product.price = price;
    }
    return product;
    // const [id, title, description, price] = product;
  }
  getProductById(id: string): Product {
    const product = this.findProduct(id);
    return product;
  }
  insertProduct(title: string, desc: string, price: number): string {
    const prodId = new Date().toString();
    const newProduct = new Product(new Date().toString(), title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }
  private findProduct(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException('Not found Produt');
    }
    return product;
  }
}
