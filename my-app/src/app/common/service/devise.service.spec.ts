import { TestBed } from '@angular/core/testing';

import { DeviseService } from './devise.service';

describe('DeviseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviseService = TestBed.get(DeviseService);
    expect(service).toBeTruthy();
  });
});
