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

  product: Product = new Product();

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit() { }

  create() {
    this._productService.add(this.product);
    this._router.navigate(['list']);
  }

}
