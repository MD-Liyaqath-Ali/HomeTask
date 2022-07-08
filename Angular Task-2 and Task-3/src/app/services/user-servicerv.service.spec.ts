import { TestBed } from '@angular/core/testing';

import { UserServicervService } from './user-servicerv.service';

describe('UserServicervService', () => {
  let service: UserServicervService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicervService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
