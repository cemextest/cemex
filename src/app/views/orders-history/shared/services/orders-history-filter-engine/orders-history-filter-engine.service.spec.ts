import { TestBed } from '@angular/core/testing';

import { OrdersHistoryFilterEngineService } from './orders-history-filter-engine.service';

describe('OrdersHistoryFilterEngineService', () => {
  let service: OrdersHistoryFilterEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersHistoryFilterEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
