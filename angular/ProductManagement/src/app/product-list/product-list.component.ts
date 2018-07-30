import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.products.subscribe( data => {
      this.products = data;
    });
  }

  destroy = (product: Product): void => {
    this._productService.destroy(product);
  }

}
