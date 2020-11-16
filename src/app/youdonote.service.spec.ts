import { TestBed } from '@angular/core/testing';

import { YoudonoteService } from './youdonote.service';

describe('YoudonoteService', () => {
  let service: YoudonoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoudonoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
