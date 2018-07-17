import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { GoldlogComponent } from './goldlog/goldlog.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    GoldlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
