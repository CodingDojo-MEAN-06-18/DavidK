import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromNotes from './notes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    //  /books
    children: [
      {
        path: '',
        component: fromNotes.NoteListComponent,
      },
      {
        path: 'new',
        component: fromNotes.NoteNewComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
