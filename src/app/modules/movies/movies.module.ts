import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { TopStoriesModule } from '../top-stories/top-stories.module';
import { SharedModule } from '../shared.module';
import { MoviesLocalService } from './services/movies-local.service';
import { MoviesService } from 'src/app/services/api/movies/services';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoviesPageComponent,
    
    // PageHeaderComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
    // TopStoriesModule/
  ],
  providers: [MoviesService, MoviesLocalService]
})
export class MoviesModule { }
