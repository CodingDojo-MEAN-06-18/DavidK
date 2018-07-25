import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductNewComponent } from './product-new/product-new.component';



const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: ProductHomeComponent,
    children: []
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
    children: []
  },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: ProductEditComponent,
    children: []
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: ProductNewComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
