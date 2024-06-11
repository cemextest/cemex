import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryTableComponent } from './orders-history-table.component';
import { OrderProductType, OrderStatusKind } from '../shared/models';

describe('OrdersHistoryTableComponent', () => {
  let component: OrdersHistoryTableComponent;
  let fixture: ComponentFixture<OrdersHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersHistoryTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should define "dateFormat" property', () => {
    const expectedValue = 'dd.MM.YYYY';

    expect(component.dateFormat).toBe(expectedValue);
  });

  it('should define "statusLabelMap" property', () => {
    const expectedValue = new Map<OrderStatusKind, string>([
      [OrderStatusKind.InProgress, 'In Progress'],
      [OrderStatusKind.Pending, 'Pending'],
      [OrderStatusKind.Completed, 'Completed'],
    ]);

    expect(component.statusLabelMap).toEqual(expectedValue);
  });

  it('should define "statusColorMap" property', () => {
    const expectedValue = new Map<OrderStatusKind, string>([
      [OrderStatusKind.InProgress, '#3fa9f5'],
      [OrderStatusKind.Pending, '#fbb03b'],
      [OrderStatusKind.Completed, '#7ac943'],
    ]);

    expect(component.statusColorMap).toEqual(expectedValue);
  });

  it('should define "productTypeLabelMap" property', () => {
    const expectedValue = new Map<OrderProductType, string>([
      [OrderProductType.ReadyMix, 'Ready-Mix'],
      [OrderProductType.Cement, 'Cement'],
      [OrderProductType.Aggregates, 'Aggregates'],
    ]);

    expect(component.productTypeLabelMap).toEqual(expectedValue);
  });

  it('should define "columns" property', () => {
    const expectedValue = ['Status', 'Order Number', 'Product Line', 'Product', 'Quantity', 'Date Requested'];

    expect(component.columns).toEqual(expectedValue);
  });
});
