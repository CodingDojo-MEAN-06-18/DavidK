import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromManager from './teamManager';

const routes: Routes = [
  {
    path: 'players/addplayer',
    component:  fromManager.PlayerAddComponent
  },
  {
    path: 'status/game/:id',
    component: fromManager.PlayerStatusComponent
  },
  {
    path: 'players/list',
    component: fromManager.PlayerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
