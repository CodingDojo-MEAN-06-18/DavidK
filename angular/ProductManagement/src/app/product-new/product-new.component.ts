import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(private _productService: ProductService,  private _router: Router) {
    this._productService.productsObservable.subscribe((products) => {
      this.products = products;
    });
   }

  ngOnInit() {
    this.newProduct = new Product();
  }

}
