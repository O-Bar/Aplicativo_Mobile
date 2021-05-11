import { TestBed } from '@angular/core/testing';

import { RemedioService } from './remedio.service';

describe('RemedioService', () => {
  let service: RemedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
