import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':authorId',
    loadComponent: () =>
      import('./author-form/author-form.component').then(
        (m) => m.AuthorFormComponent
      ),
  },
];
