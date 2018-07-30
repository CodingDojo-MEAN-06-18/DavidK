import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
  private _productService: ProductService,
  private _route: ActivatedRoute,
  private _router: Router
  ) {
    this._route.paramMap.subscribe(params => {
      this.product = this._productService.getProduct(Number(params.get('id')));
    });
  }

  ngOnInit() {
  }

  update(event: Event): void {
    event.preventDefault();
    this._productService.updateProduct(this.product);
    this._router.navigate(['list']);
  }
  }
