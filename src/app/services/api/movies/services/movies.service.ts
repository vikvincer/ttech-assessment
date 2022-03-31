/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import key from '../../../../../api-key.json';
import { Critic } from '../models/critic';
import { Review } from '../models/review';
@Injectable({
  providedIn: 'root',
})
class MoviesService extends __BaseService {
  static readonly getCriticsReviewerJsonPath = '/critics/{reviewer}.json';
  static readonly getReviewsTypeJsonPath = '/reviews/{type}.json';
  static readonly getReviewsSearchJsonPath = '/reviews/search.json';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get movie critics name, bio and image.
   *
   * Get movie critics. You can either specify the reviewer name or use "all", "full-time", or "part-time".
   * @param reviewer Reviewer name or "all" for all reviewers, "full-time" for full-time reviewers, or "part-time" for part-time reviewers.
   * @return Array of movie critics.
   */
  getCriticsReviewerJsonResponse(reviewer: string): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<Critic>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/critics/${encodeURIComponent(String(reviewer))}.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<Critic>}>;
      })
    );
  }
  /**
   * Get movie critics name, bio and image.
   *
   * Get movie critics. You can either specify the reviewer name or use "all", "full-time", or "part-time".
   * @param reviewer Reviewer name or "all" for all reviewers, "full-time" for full-time reviewers, or "part-time" for part-time reviewers.
   * @return Array of movie critics.
   */
  getCriticsReviewerJson(reviewer: string): __Observable<{status?: string, copyright?: string, num_results?: number, results?: Array<Critic>}> {
    return this.getCriticsReviewerJsonResponse(reviewer).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, num_results?: number, results?: Array<Critic>})
    );
  }

  /**
   * Get movie reviews.
   *
   * Get movie reviews.  Can filter to only return Critics' Picks.
   * Supports ordering results by-publication-date or by-opening-date.
   * Use offset to paginate thru results, 20 at a time.
   * @param params The `MoviesService.GetReviewsTypeJsonParams` containing the following parameters:
   *
   * - `type`: Filter by critics' pick or not.
   *
   * - `order`: How to order the results.
   *
   * - `offset`: Sets the starting point of the result set.  Needs to be multiple of 20.
   *
   * @return Array of movie reviews.
   */
  getReviewsTypeJsonResponse(params: MoviesService.GetReviewsTypeJsonParams): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reviews/${encodeURIComponent(String(params.type))}.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>}>;
      })
    );
  }
  /**
   * Get movie reviews.
   *
   * Get movie reviews.  Can filter to only return Critics' Picks.
   * Supports ordering results by-publication-date or by-opening-date.
   * Use offset to paginate thru results, 20 at a time.
   * @param params The `MoviesService.GetReviewsTypeJsonParams` containing the following parameters:
   *
   * - `type`: Filter by critics' pick or not.
   *
   * - `order`: How to order the results.
   *
   * - `offset`: Sets the starting point of the result set.  Needs to be multiple of 20.
   *
   * @return Array of movie reviews.
   */
  getReviewsTypeJson(params: MoviesService.GetReviewsTypeJsonParams): __Observable<{status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>}> {
    return this.getReviewsTypeJsonResponse(params).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>})
    );
  }

  /**
   * Search for movie reviews.
   *
   * Search for movie reviews.  Supports filtering by Critics' Pick.
   * @param params The `MoviesService.GetReviewsSearchJsonParams` containing the following parameters:
   *
   * - `reviewer`: Filter by reviewer byline (e.g. Stephen Holden).
   *
   * - `query`: Search keyword (e.g. lebowski).
   *
   * - `publication-date`: Review publication date range. Start and end dates separated by colon (e.g. 1930-01-01:1940-01-01).
   *
   * - `order`: Field to order results by (e.g. by-publication-date).
   *
   * - `opening-date`: U.S. opening date range. Start and end dates separated by colon (e.g. 1930-01-01:1940-01-01).
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results. Defaults to 0. The has_more field indicates the response has more results.
   *
   * - `critics-pick`: Set to Y to only show critics' picks.  Otherwise shows both.
   *
   * @return Array of movie reviews.
   */
  getReviewsSearchJsonResponse(params: MoviesService.GetReviewsSearchJsonParams): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.reviewer != null) __params = __params.set('reviewer', params.reviewer.toString());
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.publicationDate != null) __params = __params.set('publication-date', params.publicationDate.toString());
    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.openingDate != null) __params = __params.set('opening-date', params.openingDate.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.criticsPick != null) __params = __params.set('critics-pick', params.criticsPick.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reviews/search.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>}>;
      })
    );
  }
  /**
   * Search for movie reviews.
   *
   * Search for movie reviews.  Supports filtering by Critics' Pick.
   * @param params The `MoviesService.GetReviewsSearchJsonParams` containing the following parameters:
   *
   * - `reviewer`: Filter by reviewer byline (e.g. Stephen Holden).
   *
   * - `query`: Search keyword (e.g. lebowski).
   *
   * - `publication-date`: Review publication date range. Start and end dates separated by colon (e.g. 1930-01-01:1940-01-01).
   *
   * - `order`: Field to order results by (e.g. by-publication-date).
   *
   * - `opening-date`: U.S. opening date range. Start and end dates separated by colon (e.g. 1930-01-01:1940-01-01).
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results. Defaults to 0. The has_more field indicates the response has more results.
   *
   * - `critics-pick`: Set to Y to only show critics' picks.  Otherwise shows both.
   *
   * @return Array of movie reviews.
   */
  getReviewsSearchJson(params: MoviesService.GetReviewsSearchJsonParams): __Observable<{status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>}> {
    return this.getReviewsSearchJsonResponse(params).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, has_more?: boolean, num_results?: number, results?: Array<Review>})
    );
  }
}

module MoviesService {

  /**
   * Parameters for getReviewsTypeJson
   */
  export interface GetReviewsTypeJsonParams {

    /**
     * Filter by critics' pick or not.
     */
    type: 'all' | 'picks';

    /**
     * How to order the results.
     */
    order?: 'by-opening-date' | 'by-publication-date';

    /**
     * Sets the starting point of the result set.  Needs to be multiple of 20.
     */
    offset?: number;
  }

  /**
   * Parameters for getReviewsSearchJson
   */
  export interface GetReviewsSearchJsonParams {

    /**
     * Filter by reviewer byline (e.g. Stephen Holden).
     */
    reviewer?: string;

    /**
     * Search keyword (e.g. lebowski).
     */
    query?: string;

    /**
     * Review publication date range. Start and end dates separated by colon (e.g. 1930-01-01:1940-01-01).
     */
    publicationDate?: string;

    /**
     * Field to order results by (e.g. by-publication-date).
     */
    order?: 'by-opening-date' | 'by-publication-date';

    /**
     * U.S. opening date range. Start and end dates separated by colon (e.g. 1930-01-01:1940-01-01).
     */
    openingDate?: string;

    /**
     * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results. Defaults to 0. The has_more field indicates the response has more results.
     */
    offset?: number;

    /**
     * Set to Y to only show critics' picks.  Otherwise shows both.
     */
    criticsPick?: 'Y';
  }
}

export { MoviesService }
