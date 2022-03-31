import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopStoriesRoutingModule } from './top-stories-routing.module';
import { TopStoriesPageComponent } from './pages/top-stories-page/top-stories-page.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { MatCardModule } from '@angular/material/card';
// import { CardItemComponent } from 'src/app/components/card-item/card-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {StoriesService} from '../../services/api/topStories/services';
import { HttpClientModule } from '@angular/common/http';
import { TopStoriesLocalService } from './services/top-stories-local.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    TopStoriesPageComponent,
    // PageHeaderComponent,
    // CardItemComponent
  ],
  imports: [
    CommonModule,
    TopStoriesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [PageHeaderComponent],
  providers: [StoriesService, TopStoriesLocalService]
})
export class TopStoriesModule { }
