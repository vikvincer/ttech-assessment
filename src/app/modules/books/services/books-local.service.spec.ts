import { TestBed } from '@angular/core/testing';

import { BooksLocalService } from './books-local.service';

describe('BooksLocalService', () => {
  let service: BooksLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
