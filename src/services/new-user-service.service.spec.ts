import { TestBed } from '@angular/core/testing';

import { NewUserServiceService } from './new-user-service.service';

describe('NewUserServiceService', () => {
  let service: NewUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
