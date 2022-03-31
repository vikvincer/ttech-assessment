import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api/books/services';

@Injectable({
  providedIn: 'root'
})
export class BooksLocalService {

  constructor(private bookApiService: ApiService) { }

  private transformList(list: string) {
    return list?.replace(' ', '-')?.toLocaleLowerCase()
  }
  getBooks(param: ApiService.GETReviewsFormatParams) {
   return this.bookApiService.GETReviewsFormat(param).pipe(map(response => response.results))
  }


  getBookList(param: ApiService.GETListsDateListJsonParams) {
    param.list = this.transformList(param.list);
    return this.bookApiService.GETListsDateListJson(param).pipe(map(response => response.results));
  }

  
}
