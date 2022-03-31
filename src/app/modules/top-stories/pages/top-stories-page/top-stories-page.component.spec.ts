import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoriesPageComponent } from './top-stories-page.component';

describe('TopStoriesPageComponent', () => {
  let component: TopStoriesPageComponent;
  let fixture: ComponentFixture<TopStoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
