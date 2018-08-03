import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as TeamManager from './teammanager';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: TeamManager.TeammanagerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },

      {
        path: 'add',
        component: TeamManager.AddplayerComponent
      },

      {
        path: 'list',
        component: TeamManager.ListplayersComponent
      }
    ]
  },
  {
    path: 'games',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '1'
      },
      {
        path: ':id',
        component: TeamManager.GameComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
