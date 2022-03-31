import { Injectable } from '@angular/core';
import { MoviewerParamModel } from '../../../models/MovieParam.model';
import { MoviesService } from 'src/app/services/api/movies/services/movies.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesLocalService {

  constructor(private moviesService: MoviesService) { }

  getReviews(param: MoviesService.GetReviewsSearchJsonParams): Observable<any> {
   return this.moviesService.getReviewsSearchJson(param).pipe(map(res => res.results));
  }
}
