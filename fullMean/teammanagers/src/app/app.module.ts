import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule} from '../../node_modules/ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayersService } from './teammanager/services/team/players.service';

import { TeammanagerComponent } from './teammanager/teammanager.component';
import { GameComponent } from './teammanager/games/game/game.component';
import { AddplayerComponent } from './teammanager/players/addplayer/addplayer.component';
import { ListplayersComponent } from './teammanager/players/listplayers/listplayers.component';

@NgModule({
  declarations: [
    AppComponent,
    TeammanagerComponent,
    GameComponent,
    AddplayerComponent,
    ListplayersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
