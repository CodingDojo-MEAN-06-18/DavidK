import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import * as fromBooks from './books';
import { BookResolve } from './resolvers';

const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    //  /books
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':book_id',
        component: fromBooks.BookDetailComponent,
        resolve: {
          book: BookResolve
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   enableTracing: !environment.production,
  })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
