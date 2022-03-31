import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter, map, pairwise, throttleTime } from 'rxjs';
import { MoviewerParamModel } from 'src/app/models/MovieParam.model';
import { Critic, Review } from 'src/app/services/api/movies/models';
import { MoviesService } from 'src/app/services/api/movies/services';
import { MoviesLocalService } from '../../services/movies-local.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit, AfterViewInit {

  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;
  pageTitle = 'Movies'
  listItems: any;
  paginatedListItems: any = [];
  itemsPerpage: number = 5;
  currentIndex: number = 0;
  searchBarForm = new FormGroup({
    searchInputField: new FormControl('')
  });
  loading: boolean = true;
  sortByList = [
    {viewValue: '_',value: ''  },
    {viewValue: 'Opening date',value: 'by-opening-date'  },
    {viewValue: 'Publication date',value: 'by-publication-date'  }
  ]
  sortSelectForm = new FormGroup({
    selectSortField: new FormControl('')
  })
  constructor(private moviesLocalService: MoviesLocalService, private ngZone: NgZone ) { }

  ngOnInit(): void {
   this.getData();
   this.searchFormGroup();
   this.selectSortFormGroup();
  }

  getData(param: MoviesService.GetReviewsSearchJsonParams = {reviewer: ''}) {
    this.moviesLocalService.getReviews(param).subscribe(data => {
      console.log({data});
      this.listItems = data?.map((d: any) => this.transformdata(d));
      this.paginatedListItems = this.listItems?.splice(0, this.itemsPerpage);
      this.loading = false;
    });
  }

  transformdata(item: Review) {
    return {
      title: item.headline,
      abstract: item.summary_short,
      multimedia: item.multimedia?.src ? [{url: item.multimedia?.src}] : null,
      byline: item.byline,
      opening_date: item.opening_date,
      publication_date: item.publication_date
    }
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

  searchFormGroup() {
    this.searchBarForm.controls['searchInputField'].valueChanges.pipe(debounceTime(800)).subscribe(keyword => {
      this.paginatedListItems = [];
      this.listItems = [];
      this.getData({reviewer: keyword, order: this.sortSelectForm.get('selectSortField')?.value});
      this.loading = true;
    })
  };

  selectSortFormGroup() {
    this.sortSelectForm.controls['selectSortField'].valueChanges.subscribe(selected => {
      this.paginatedListItems = [];
      this.listItems = [];
      this.getData({reviewer: this.searchBarForm.get('searchInputField')?.value, order: selected});
      this.loading = true;
    })
  }

}
