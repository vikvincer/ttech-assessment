import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter, map, pairwise, throttleTime } from 'rxjs';
import { ApiService } from 'src/app/services/api/books/services';
import { BooksLocalService } from '../../services/books-local.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;
  pageTitle = 'Books';
  listItems: any;
  paginatedListItems: any = [{}, ];
  itemsPerpage: number = 10;
  currentPage = 0;
  loading: boolean = true;
  dafaultParam: ApiService.GETListsDateListJsonParams = {list: 'Expeditions Disasters And Adventures', date: 'current', offset: this.currentPage}
  searchBarForm = new FormGroup({
    searchInputField: new FormControl('')
  });
  searchSelectForm = new FormGroup({
    selectSearchField: new FormControl('')
  })
  searchByList = [
    {viewValue: '_',value: ''  },
    {viewValue: 'Author',value: 'author'  },
    {viewValue: 'ISBN',value: 'isbn'  },
    {viewValue: 'Title',value: 'title'  }
  ]
  constructor(private booksLocalService: BooksLocalService, private ngZone: NgZone) { }

  ngOnInit(): void {

    this.getBooks(this.dafaultParam);
    this.searchFormGroup();
    this.selectSortFormGroup();
  }

  ngAfterViewInit(): void {
    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.paginatedListItems = [...this.paginatedListItems, ...this.listItems?.splice(0, this.itemsPerpage)];
      });
  })}

  getBooks(param: ApiService.GETListsDateListJsonParams) {
    this.booksLocalService.getBookList(param).subscribe((data: any) => {
      this.listItems = data?.map((d: any) => this.transformData(d));
      this.paginatedListItems = this.listItems?.splice(0, this.itemsPerpage);
      this.loading = false;
      console.log('asdf', data);
    },error => this.loading = false);
  };

  getBooksWithParam(param: ApiService.GETReviewsFormatParams) {
    this.booksLocalService.getBooks(param).subscribe(data => {
      console.log('ff', data);
      this.listItems = data?.map((d: any) => this.tranformBooksWithParamData(d));
      this.paginatedListItems = this.listItems?.splice(0, this.itemsPerpage);
      this.loading = false;
    }, error => this.loading = false)
  }

  transformData(item: any) {
    return {
      title: item.book_details[0].title,
      multimedia: item.book_details[0].book_image ? [{url: item.book_details[0].book_image}] : null,
      byline: item.book_details[0].author,
      abstract: item.book_details[0].description
    }
  }

  tranformBooksWithParamData(item: any) {
    return {
      title: item.title,
      multimedia: item.book_details[0].book_image ? [{url: item.book_details[0].book_image}] : null,
      byline: item.author,
      abstract: item.book_details[0].description
    }
  }

  searchFormGroup() {
    this.searchBarForm.controls['searchInputField']
      .valueChanges.pipe(debounceTime(500)).subscribe(value => {
        this.loading = true;
        this.paginatedListItems = [];
        this.listItems = [];
        const key = this.searchSelectForm.get('selectSearchField')?.value;
        if (key) {
          this.getBooksWithParam({[key]: value});
        } else {
          this.getBooks({list: value ? value : this.dafaultParam.list, date: 'current', offset: this.currentPage})
        }
       
      })
  };

  selectSortFormGroup() {
    this.searchSelectForm.controls['selectSearchField'].valueChanges.subscribe(selected => {

      const keyword =  this.searchBarForm.get('searchInputField')?.value;
      if (keyword) {
        this.paginatedListItems = [];
        this.listItems = [];
        this.loading = true;
        this.getBooksWithParam({[selected]: keyword});
      }
     
    })
  }



}
