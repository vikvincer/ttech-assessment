import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TopStoriesSectionModel } from '../../../models/TopStoriesSection.model';
import { StoriesService } from 'src/app/services/api/topStories/services';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesLocalService {

  constructor(private storiesService: StoriesService) { }

  getTopStories(param: TopStoriesSectionModel): Observable<any> {
    return this.storiesService.getSectionJsonResponse(param.section).pipe(map(res => res.body.results));
  }

}
