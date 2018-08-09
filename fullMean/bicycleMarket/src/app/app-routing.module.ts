import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import * as fromBikes from './bikes';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
