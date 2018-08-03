import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerService } from './manager.service';
import * as fromManager from './teamManager';

@NgModule({
  declarations: [
    AppComponent,
    ...fromManager.components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
