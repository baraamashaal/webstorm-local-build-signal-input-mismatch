import { TestBed } from '@angular/core/testing';

import { SomeLibService } from './some-lib.service';

describe('SomeLibService', () => {
  let service: SomeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
