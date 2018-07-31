import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotelistComponent } from './notes/notelist/notelist.component';
import { NotenewComponent } from './notes/notenew/notenew.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NotelistComponent
  },
  {
    path: 'notes/new',
    component: NotenewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
