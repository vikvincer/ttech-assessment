/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import key from '../../../../../api-key.json';


import { Article } from '../models/article';
@Injectable({
  providedIn: 'root',
})
class StoriesService extends __BaseService {
  static readonly getSectionJsonPath = '/{section}.json';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Top Stories
   *
   * The Top Stories API returns an array of articles currently on the specified section.
   * @param section The section the story appears in.
   * @return An array of articles.
   */
  getSectionJsonResponse(section: 'arts' | 'automobiles' | 'books' | 'business' | 'fashion' | 'food' | 'health' | 'home' | 'insider' | 'magazine' | 'movies' | 'nyregion' | 'obituaries' | 'opinion' | 'politics' | 'realestate' | 'science' | 'sports' | 'sundayreview' | 'technology' | 'theater' | 't-magazine' | 'travel' | 'upshot' | 'us' | 'world'): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, section?: string, last_updated?: string, num_results?: number, results?: Array<Article>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${encodeURIComponent(String(section))}.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, section?: string, last_updated?: string, num_results?: number, results?: Array<Article>}>;
      })
    );
  }
  /**
   * Top Stories
   *
   * The Top Stories API returns an array of articles currently on the specified section.
   * @param section The section the story appears in.
   * @return An array of articles.
   */
  getSectionJson(section: 'arts' | 'automobiles' | 'books' | 'business' | 'fashion' | 'food' | 'health' | 'home' | 'insider' | 'magazine' | 'movies' | 'nyregion' | 'obituaries' | 'opinion' | 'politics' | 'realestate' | 'science' | 'sports' | 'sundayreview' | 'technology' | 'theater' | 't-magazine' | 'travel' | 'upshot' | 'us' | 'world'): __Observable<{status?: string, copyright?: string, section?: string, last_updated?: string, num_results?: number, results?: Array<Article>}> {
    return this.getSectionJsonResponse(section).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, section?: string, last_updated?: string, num_results?: number, results?: Array<Article>})
    );
  }
}

module StoriesService {
}

export { StoriesService }
