import { TestBed } from '@angular/core/testing';

import { ServicesItemService } from './services-item.service';

describe('ServicesItemService', () => {
  let service: ServicesItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
