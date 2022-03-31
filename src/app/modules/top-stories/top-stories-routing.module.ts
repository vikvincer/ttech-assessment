import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesPageComponent } from './pages/top-stories-page/top-stories-page.component';

const routes: Routes = [
  {path: '', component: TopStoriesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopStoriesRoutingModule { }
