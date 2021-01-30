import { TestBed } from '@angular/core/testing';

import { PonctuationServiceService } from './ponctuation-service.service';

describe('PonctuationServiceService', () => {
  let service: PonctuationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonctuationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
