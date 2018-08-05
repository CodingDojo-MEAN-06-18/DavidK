import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Github from './github';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'github',
  },
  {
    path: 'github',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'battle'
      },
      {
        path: 'battle',
        component: Github.BattleComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'faceoff'
          },
          {
            path: 'faceoff',
            component: Github.FaceoffComponent
          },
          {
            path: 'winner',
            component: Github.WinnerComponent
          }
        ]
      },
      {
        path: 'rank',
        component: Github.RankingsComponent
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
