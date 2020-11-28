import { TestBed } from '@angular/core/testing';

import { News2FeedsService } from './news2--feeds.service';

describe('News2FeedsService', () => {
  let service: News2FeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(News2FeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
