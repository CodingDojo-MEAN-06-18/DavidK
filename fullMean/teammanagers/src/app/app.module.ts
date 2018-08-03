import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeammanagerComponent } from './teammanager/teammanager.component';
import { GameComponent } from './teammanager/games/game/game.component';
import { AddplayerComponent } from './teammanager/players/addplayer/addplayer.component';
import { ListplayersComponent } from './teammanager/players/listplayers/listplayers.component';
import { PlayersComponent } from './teammanager/services/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    TeammanagerComponent,
    GameComponent,
    AddplayerComponent,
    ListplayersComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
