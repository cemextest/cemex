import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryTableComponent } from './orders-history-table.component';

describe('OrdersHistoryTableComponent', () => {
  let component: OrdersHistoryTableComponent;
  let fixture: ComponentFixture<OrdersHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersHistoryTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
