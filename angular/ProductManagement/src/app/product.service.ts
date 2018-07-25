import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>) {
    this.productsObservable.next(products);
  }


}
