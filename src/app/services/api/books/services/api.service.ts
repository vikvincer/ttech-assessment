/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import key from '../../../../../api-key.json';

import { OverviewResponse } from '../models/overview-response';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly GETListsFormatPath = '/lists.json';
  static readonly GETListsDateListJsonPath = '/lists/{date}/{list}.json';
  static readonly GETListsFullOverviewFormatPath = '/lists/full-overview.json';
  static readonly GETListsOverviewFormatPath = '/lists/overview.json';
  static readonly GETListsNamesFormatPath = '/lists/names.json';
  static readonly GETListsBestSellersHistoryJsonPath = '/lists/best-sellers/history.json';
  static readonly GETReviewsFormatPath = '/reviews.json';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Best Sellers List
   *
   * Get Best Sellers list.  If no date is provided returns the latest list.
   * @param params The `ApiService.GETListsFormatParams` containing the following parameters:
   *
   * - `list`: The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).
   *   The /lists/names service returns all the list names.
   *   The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).
   *
   * - `published-date`: YYYY-MM-DD
   *
   *   The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use "current" for latest list.
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
   *
   * - `bestsellers-date`: YYYY-MM-DD
   *
   *   The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
   *
   * @return Best Sellers list books
   */
  GETListsFormatResponse(params: ApiService.GETListsFormatParams): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: Array<{list_name?: string, display_name?: string, bestsellers_date?: string, published_date?: string, rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, amazon_product_url?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, book_details?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, primary_isbn13?: string, primary_isbn10?: string}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.list != null) __params = __params.set('list', params.list.toString());
    if (params.publishedDate != null) __params = __params.set('published-date', params.publishedDate.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.bestsellersDate != null) __params = __params.set('bestsellers-date', params.bestsellersDate.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lists.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: Array<{list_name?: string, display_name?: string, bestsellers_date?: string, published_date?: string, rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, amazon_product_url?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, book_details?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, primary_isbn13?: string, primary_isbn10?: string}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>}>;
      })
    );
  }
  /**
   * Best Sellers List
   *
   * Get Best Sellers list.  If no date is provided returns the latest list.
   * @param params The `ApiService.GETListsFormatParams` containing the following parameters:
   *
   * - `list`: The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).
   *   The /lists/names service returns all the list names.
   *   The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).
   *
   * - `published-date`: YYYY-MM-DD
   *
   *   The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use "current" for latest list.
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
   *
   * - `bestsellers-date`: YYYY-MM-DD
   *
   *   The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
   *
   * @return Best Sellers list books
   */
  GETListsFormat(params: ApiService.GETListsFormatParams): __Observable<{status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: Array<{list_name?: string, display_name?: string, bestsellers_date?: string, published_date?: string, rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, amazon_product_url?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, book_details?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, primary_isbn13?: string, primary_isbn10?: string}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>}> {
    return this.GETListsFormatResponse(params).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: Array<{list_name?: string, display_name?: string, bestsellers_date?: string, published_date?: string, rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, amazon_product_url?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, book_details?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, primary_isbn13?: string, primary_isbn10?: string}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>})
    );
  }

  /**
   * Best Sellers List by Date
   *
   * Get Best Sellers list by date.
   * @param params The `ApiService.GETListsDateListJsonParams` containing the following parameters:
   *
   * - `list`: Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service.
   *
   * - `date`: YYYY-MM-DD or "current"
   *
   *   The date the best sellers list was published on NYTimes.com.  Use "current" to get latest list.
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
   *
   * @return Best Sellers list books.
   */
  GETListsDateListJsonResponse(params: ApiService.GETListsDateListJsonParams): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: {list_name?: string, bestsellers_date?: string, published_date?: string, display_name?: string, normal_list_ends_at?: number, updated?: string, books?: Array<{rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, primary_isbn10?: string, primary_isbn13?: string, publisher?: string, description?: string, price?: number, title?: string, author?: string, contributor?: string, contributor_note?: string, book_image?: string, amazon_product_url?: string, age_group?: string, book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>}>, corrections?: Array<{}>}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lists/${encodeURIComponent(String(params.date))}/${encodeURIComponent(String(params.list))}.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: {list_name?: string, bestsellers_date?: string, published_date?: string, display_name?: string, normal_list_ends_at?: number, updated?: string, books?: Array<{rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, primary_isbn10?: string, primary_isbn13?: string, publisher?: string, description?: string, price?: number, title?: string, author?: string, contributor?: string, contributor_note?: string, book_image?: string, amazon_product_url?: string, age_group?: string, book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>}>, corrections?: Array<{}>}}>;
      })
    );
  }
  /**
   * Best Sellers List by Date
   *
   * Get Best Sellers list by date.
   * @param params The `ApiService.GETListsDateListJsonParams` containing the following parameters:
   *
   * - `list`: Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service.
   *
   * - `date`: YYYY-MM-DD or "current"
   *
   *   The date the best sellers list was published on NYTimes.com.  Use "current" to get latest list.
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
   *
   * @return Best Sellers list books.
   */
  GETListsDateListJson(params: ApiService.GETListsDateListJsonParams): __Observable<{status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: {list_name?: string, bestsellers_date?: string, published_date?: string, display_name?: string, normal_list_ends_at?: number, updated?: string, books?: Array<{rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, primary_isbn10?: string, primary_isbn13?: string, publisher?: string, description?: string, price?: number, title?: string, author?: string, contributor?: string, contributor_note?: string, book_image?: string, amazon_product_url?: string, age_group?: string, book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>}>, corrections?: Array<{}>}}> {
    return this.GETListsDateListJsonResponse(params).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, num_results?: number, last_modified?: string, results?: {list_name?: string, bestsellers_date?: string, published_date?: string, display_name?: string, normal_list_ends_at?: number, updated?: string, books?: Array<{rank?: number, rank_last_week?: number, weeks_on_list?: number, asterisk?: number, dagger?: number, primary_isbn10?: string, primary_isbn13?: string, publisher?: string, description?: string, price?: number, title?: string, author?: string, contributor?: string, contributor_note?: string, book_image?: string, amazon_product_url?: string, age_group?: string, book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>}>, corrections?: Array<{}>}})
    );
  }

  /**
   * Best Sellers List Full Overview
   *
   * Get all books for all the Best Sellers lists for specified date.
   * @param published_date YYYY-MM-DD
   *
   * The best-seller list publication date.
   * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
   *
   * If you do not include a published date, the current week's best sellers lists will be returned.
   * @return Full overview of Best Sellers lists.
   */
  GETListsFullOverviewFormatResponse(publishedDate?: string): __Observable<__StrictHttpResponse<OverviewResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (publishedDate != null) __params = __params.set('published_date', publishedDate.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lists/full-overview.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OverviewResponse>;
      })
    );
  }
  /**
   * Best Sellers List Full Overview
   *
   * Get all books for all the Best Sellers lists for specified date.
   * @param published_date YYYY-MM-DD
   *
   * The best-seller list publication date.
   * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
   *
   * If you do not include a published date, the current week's best sellers lists will be returned.
   * @return Full overview of Best Sellers lists.
   */
  GETListsFullOverviewFormat(publishedDate?: string): __Observable<OverviewResponse> {
    return this.GETListsFullOverviewFormatResponse(publishedDate).pipe(
      __map(_r => _r.body as OverviewResponse)
    );
  }

  /**
   * Best Sellers List Overview
   *
   * Get top 5 books for all the Best Sellers lists for specified date.
   * @param published_date YYYY-MM-DD
   *
   * The best-seller list publication date.
   * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
   *
   * If you do not include a published date, the current week's best sellers lists will be returned.
   * @return Overview of Best Sellers lists.
   */
  GETListsOverviewFormatResponse(publishedDate?: string): __Observable<__StrictHttpResponse<OverviewResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (publishedDate != null) __params = __params.set('published_date', publishedDate.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lists/overview.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OverviewResponse>;
      })
    );
  }
  /**
   * Best Sellers List Overview
   *
   * Get top 5 books for all the Best Sellers lists for specified date.
   * @param published_date YYYY-MM-DD
   *
   * The best-seller list publication date.
   * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
   *
   * If you do not include a published date, the current week's best sellers lists will be returned.
   * @return Overview of Best Sellers lists.
   */
  GETListsOverviewFormat(publishedDate?: string): __Observable<OverviewResponse> {
    return this.GETListsOverviewFormatResponse(publishedDate).pipe(
      __map(_r => _r.body as OverviewResponse)
    );
  }

  /**
   * Best Sellers List Names
   *
   * Get Best Sellers list names.
   * @return Get Best Sellers list names.
   */
  GETListsNamesFormatResponse(): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<{list_name?: string, display_name?: string, list_name_encoded?: string, oldest_published_date?: string, newest_published_date?: string, updated?: 'WEEKLY' | 'MONTHLY'}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lists/names.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<{list_name?: string, display_name?: string, list_name_encoded?: string, oldest_published_date?: string, newest_published_date?: string, updated?: 'WEEKLY' | 'MONTHLY'}>}>;
      })
    );
  }
  /**
   * Best Sellers List Names
   *
   * Get Best Sellers list names.
   * @return Get Best Sellers list names.
   */
  GETListsNamesFormat(): __Observable<{status?: string, copyright?: string, num_results?: number, results?: Array<{list_name?: string, display_name?: string, list_name_encoded?: string, oldest_published_date?: string, newest_published_date?: string, updated?: 'WEEKLY' | 'MONTHLY'}>}> {
    return this.GETListsNamesFormatResponse().pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, num_results?: number, results?: Array<{list_name?: string, display_name?: string, list_name_encoded?: string, oldest_published_date?: string, newest_published_date?: string, updated?: 'WEEKLY' | 'MONTHLY'}>})
    );
  }

  /**
   * Best Sellers List History
   *
   * Get Best Sellers list history.
   * @param params The `ApiService.GETListsBestSellersHistoryJsonParams` containing the following parameters:
   *
   * - `title`: The title of the best seller
   *
   *   When searching, you can specify a portion of a title or a full title.
   *
   * - `publisher`: The standardized name of the publisher
   *
   * - `price`: The publisher's list price of the best seller, including decimal point.
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.
   *
   * - `isbn`: International Standard Book Number, 10 or 13 digits
   *
   *   A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
   *
   * - `contributor`: The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
   *
   *   When searching, you can specify any combination of first, middle and last names of any of the contributors.
   *
   *   When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
   *
   * - `author`: The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
   *
   *   When searching the author field, you can specify any combination of first, middle and last names.
   *
   *   When sort-by is set to author, the results will be sorted by author's first name.
   *
   * - `age-group`: The target age group for the best seller.
   *
   * @return Best Sellers list history
   */
  GETListsBestSellersHistoryJsonResponse(params: ApiService.GETListsBestSellersHistoryJsonParams): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, ranks_history?: Array<{primary_isbn10?: string, primary_isbn13?: string, rank?: number, list_name?: string, display_name?: string, published_date?: string, bestsellers_date?: string, weeks_on_list?: number, ranks_last_week?: null, asterisk?: number, dagger?: number}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.title != null) __params = __params.set('title', params.title.toString());
    if (params.publisher != null) __params = __params.set('publisher', params.publisher.toString());
    if (params.price != null) __params = __params.set('price', params.price.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.isbn != null) __params = __params.set('isbn', params.isbn.toString());
    if (params.contributor != null) __params = __params.set('contributor', params.contributor.toString());
    if (params.author != null) __params = __params.set('author', params.author.toString());
    if (params.ageGroup != null) __params = __params.set('age-group', params.ageGroup.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lists/best-sellers/history.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, ranks_history?: Array<{primary_isbn10?: string, primary_isbn13?: string, rank?: number, list_name?: string, display_name?: string, published_date?: string, bestsellers_date?: string, weeks_on_list?: number, ranks_last_week?: null, asterisk?: number, dagger?: number}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>}>;
      })
    );
  }
  /**
   * Best Sellers List History
   *
   * Get Best Sellers list history.
   * @param params The `ApiService.GETListsBestSellersHistoryJsonParams` containing the following parameters:
   *
   * - `title`: The title of the best seller
   *
   *   When searching, you can specify a portion of a title or a full title.
   *
   * - `publisher`: The standardized name of the publisher
   *
   * - `price`: The publisher's list price of the best seller, including decimal point.
   *
   * - `offset`: Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.
   *
   * - `isbn`: International Standard Book Number, 10 or 13 digits
   *
   *   A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
   *
   * - `contributor`: The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
   *
   *   When searching, you can specify any combination of first, middle and last names of any of the contributors.
   *
   *   When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
   *
   * - `author`: The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
   *
   *   When searching the author field, you can specify any combination of first, middle and last names.
   *
   *   When sort-by is set to author, the results will be sorted by author's first name.
   *
   * - `age-group`: The target age group for the best seller.
   *
   * @return Best Sellers list history
   */
  GETListsBestSellersHistoryJson(params: ApiService.GETListsBestSellersHistoryJsonParams): __Observable<{status?: string, copyright?: string, num_results?: number, results?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, ranks_history?: Array<{primary_isbn10?: string, primary_isbn13?: string, rank?: number, list_name?: string, display_name?: string, published_date?: string, bestsellers_date?: string, weeks_on_list?: number, ranks_last_week?: null, asterisk?: number, dagger?: number}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>}> {
    return this.GETListsBestSellersHistoryJsonResponse(params).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, num_results?: number, results?: Array<{title?: string, description?: string, contributor?: string, author?: string, contributor_note?: string, price?: number, age_group?: string, publisher?: string, isbns?: Array<{isbn10?: string, isbn13?: string}>, ranks_history?: Array<{primary_isbn10?: string, primary_isbn13?: string, rank?: number, list_name?: string, display_name?: string, published_date?: string, bestsellers_date?: string, weeks_on_list?: number, ranks_last_week?: null, asterisk?: number, dagger?: number}>, reviews?: Array<{book_review_link?: string, first_chapter_link?: string, sunday_review_link?: string, article_chapter_link?: string}>}>})
    );
  }

  /**
   * Reviews
   *
   * Get book reviews.
   * @param params The `ApiService.GETReviewsFormatParams` containing the following parameters:
   *
   * - `title`: You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
   *
   * - `isbn`: Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
   *
   * - `author`: You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
   *
   * @return Book reviews.
   */
  GETReviewsFormatResponse(params: ApiService.GETReviewsFormatParams): __Observable<__StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<{url?: string, publication_dt?: string, byline?: string, book_title?: string, book_author?: string, summary?: string, isbn13?: Array<string>}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.title != null) __params = __params.set('title', params.title.toString());
    if (params.isbn != null) __params = __params.set('isbn', params.isbn.toString());
    if (params.author != null) __params = __params.set('author', params.author.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/reviews.json?api-key=${key.apiKey}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{status?: string, copyright?: string, num_results?: number, results?: Array<{url?: string, publication_dt?: string, byline?: string, book_title?: string, book_author?: string, summary?: string, isbn13?: Array<string>}>}>;
      })
    );
  }
  /**
   * Reviews
   *
   * Get book reviews.
   * @param params The `ApiService.GETReviewsFormatParams` containing the following parameters:
   *
   * - `title`: You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
   *
   * - `isbn`: Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
   *
   * - `author`: You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
   *
   * @return Book reviews.
   */
  GETReviewsFormat(params: ApiService.GETReviewsFormatParams): __Observable<{status?: string, copyright?: string, num_results?: number, results?: Array<{url?: string, publication_dt?: string, byline?: string, book_title?: string, book_author?: string, summary?: string, isbn13?: Array<string>}>}> {
    return this.GETReviewsFormatResponse(params).pipe(
      __map(_r => _r.body as {status?: string, copyright?: string, num_results?: number, results?: Array<{url?: string, publication_dt?: string, byline?: string, book_title?: string, book_author?: string, summary?: string, isbn13?: Array<string>}>})
    );
  }
}

module ApiService {

  /**
   * Parameters for GETListsFormat
   */
  export interface GETListsFormatParams {

    /**
     * The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).
     * The /lists/names service returns all the list names.
     * The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).
     */
    list: string;

    /**
     * YYYY-MM-DD
     *
     * The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use "current" for latest list.
     */
    publishedDate?: string;

    /**
     * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
     */
    offset?: number;

    /**
     * YYYY-MM-DD
     *
     * The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
     */
    bestsellersDate?: string;
  }

  /**
   * Parameters for GETListsDateListJson
   */
  export interface GETListsDateListJsonParams {

    /**
     * Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service.
     */
    list: string;

    /**
     * YYYY-MM-DD or "current"
     *
     * The date the best sellers list was published on NYTimes.com.  Use "current" to get latest list.
     */
    date: string;

    /**
     * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
     */
    offset?: number;
  }

  /**
   * Parameters for GETListsBestSellersHistoryJson
   */
  export interface GETListsBestSellersHistoryJsonParams {

    /**
     * The title of the best seller
     *
     * When searching, you can specify a portion of a title or a full title.
     */
    title?: string;

    /**
     * The standardized name of the publisher
     */
    publisher?: string;

    /**
     * The publisher's list price of the best seller, including decimal point.
     */
    price?: string;

    /**
     * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.
     */
    offset?: number;

    /**
     * International Standard Book Number, 10 or 13 digits
     *
     * A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
     */
    isbn?: string;

    /**
     * The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
     *
     * When searching, you can specify any combination of first, middle and last names of any of the contributors.
     *
     * When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
     */
    contributor?: string;

    /**
     * The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
     *
     * When searching the author field, you can specify any combination of first, middle and last names.
     *
     * When sort-by is set to author, the results will be sorted by author's first name.
     */
    author?: string;

    /**
     * The target age group for the best seller.
     */
    ageGroup?: string;
  }

  /**
   * Parameters for GETReviewsFormat
   */
  export interface GETReviewsFormatParams {

    /**
     * You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
     */
    title?: string;

    /**
     * Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
     */
    isbn?: number;

    /**
     * You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
     */
    author?: string;
  }
}

export { ApiService }
