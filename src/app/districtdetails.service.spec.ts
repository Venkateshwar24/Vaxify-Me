import { TestBed } from '@angular/core/testing';

import { DistrictdetailsService } from './districtdetails.service';

describe('DistrictdetailsService', () => {
  let service: DistrictdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
