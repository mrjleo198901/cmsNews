import { TestBed, inject } from '@angular/core/testing';

import { GetNewsAllService } from './get-news-all.service';

describe('GetNewsAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNewsAllService]
    });
  });

  it('should be created', inject([GetNewsAllService], (service: GetNewsAllService) => {
    expect(service).toBeTruthy();
  }));
});
