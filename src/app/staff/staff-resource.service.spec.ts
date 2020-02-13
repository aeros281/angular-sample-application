import { TestBed } from '@angular/core/testing';

import { StaffResourceService } from './staff-resource.service';

describe('StaffResourceService', () => {
  let service: StaffResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
