import { TestBed } from '@angular/core/testing';

import { MoviesLocalService } from './movies-local.service';

describe('MoviesLocalService', () => {
  let service: MoviesLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
