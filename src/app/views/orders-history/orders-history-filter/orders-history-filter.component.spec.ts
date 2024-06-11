import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryFilterComponent } from './orders-history-filter.component';

describe('OrdersHistoryFilterComponent', () => {
  let component: OrdersHistoryFilterComponent;
  let fixture: ComponentFixture<OrdersHistoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersHistoryFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
