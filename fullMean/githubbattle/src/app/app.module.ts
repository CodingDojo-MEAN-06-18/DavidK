import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './github/rankings/rankings.component';
import { BattleComponent } from './github/battle/battle.component';
import { UsernameComponent } from './github/username/username.component';
import { FaceoffComponent } from './github/battle/faceoff/faceoff.component';
import { GithubService } from './services/github.service';
import { WinnerComponent } from './github/battle/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    WinnerComponent,
    BattleComponent,
    UsernameComponent,
    FaceoffComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
