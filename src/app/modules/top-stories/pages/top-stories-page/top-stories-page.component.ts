import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { filter, map, pairwise, startWith, take, throttleTime } from 'rxjs';
import { TopStoriesSectionModel } from 'src/app/models/TopStoriesSection.model';
import { TopStoriesLocalService } from '../../services/top-stories-local.service';
import { sectionListArray } from '../../../../models/topStoriesSection.config';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-top-stories-page',
  templateUrl: './top-stories-page.component.html',
  styleUrls: ['./top-stories-page.component.scss']
})
export class TopStoriesPageComponent implements OnInit {
  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;
  pageTitle: string = 'Top stories';
  defaultSection: TopStoriesSectionModel = {section: 'arts'};
  listItems: any;
  paginatedListItems: any = [];
  itemsPerpage: number = 5;
  currentIndex: number = 0;
  sectionListSelectionArray: any[] = sectionListArray;
  selectSectionForm = new FormGroup({
    selectSectionField:  new FormControl('arts'),
  });

  constructor(private topStoriesLocalService: TopStoriesLocalService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initData(this.defaultSection);
    this.selectSectionForm.controls['selectSectionField'].valueChanges.subscribe(changes => {
      this.listItems = [];
      this.paginatedListItems = [];
      this.initData({section: changes});
    })
  }

  initData(sectionParam: TopStoriesSectionModel) {
    this.topStoriesLocalService.getTopStories(sectionParam).subscribe(data => {
      this.listItems = data;
      this.paginatedListItems = this.listItems?.splice(0, this.itemsPerpage);
     });
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

}
