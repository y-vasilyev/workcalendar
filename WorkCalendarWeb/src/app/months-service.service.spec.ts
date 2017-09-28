import { TestBed, inject } from '@angular/core/testing';

import { MonthsServiceService } from './months-service.service';

describe('MonthsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthsServiceService]
    });
  });

  it('should be created', inject([MonthsServiceService], (service: MonthsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
