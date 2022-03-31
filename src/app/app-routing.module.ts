import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: () => import('./modules/top-stories/top-stories.module').then(m => m.TopStoriesModule)},
    {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)},
    {path: 'books', loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
