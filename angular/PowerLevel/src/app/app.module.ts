import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyonComponent } from './power/saiyon/saiyon.component';
import { SupersaiyonComponent } from './power/supersaiyon/supersaiyon.component';
import { SupersaiyontwoComponent } from './power/supersaiyontwo/supersaiyontwo.component';
import { SupersaiyonthreeComponent } from './power/supersaiyonthree/supersaiyonthree.component';
import { SupersaiyonfourComponent } from './power/supersaiyonfour/supersaiyonfour.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyonComponent,
    SupersaiyonComponent,
    SupersaiyontwoComponent,
    SupersaiyonthreeComponent,
    SupersaiyonfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
