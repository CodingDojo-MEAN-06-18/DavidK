import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = new BehaviorSubject([]);

  constructor() { }

  subscribeProducts() {
    return this.products;
  }

  add(product: Product): void {
    // const products = this.products.getValue();
    const products = this.getProducts();
    product.id = products.length + 1;
    products.push(product);
    this.products.next(products);
  }

  destroy(product: Product): void {
    const products = this.getProducts().filter((item) => item.id !== product.id);
    this.products.next(products);
  }

  getProduct(id: number): Product {
    return this.getProducts().find(item => item.id === id);
  }

  updateProduct(product: Product): void {
    const products = this.getProducts();
    products.map(item => products.find(i => i.id === product.id) || item);
  }

  private getProducts = () => this.products.getValue();


}
