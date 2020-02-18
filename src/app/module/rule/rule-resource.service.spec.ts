import { TestBed } from '@angular/core/testing';

import { RuleResourceService } from './rule-resource.service';

describe('RuleResourceService', () => {
  let service: RuleResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
