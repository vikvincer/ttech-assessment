import { TestBed } from '@angular/core/testing';

import { TopStoriesLocalService } from './top-stories-local.service';

describe('TopStoriesLocalService', () => {
  let service: TopStoriesLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopStoriesLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
