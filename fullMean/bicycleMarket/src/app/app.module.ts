import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { NavComponent } from './nav/nav.component';

import * as fromServices from './services';
import * as fromShared from './shared';

import { RandombikeComponent } from './dashboard/randombike/randombike.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    ...fromShared.declarations,
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    RandombikeComponent,
    BrowseComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [
    ...fromServices.services,
    ...fromShared.declarations,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
