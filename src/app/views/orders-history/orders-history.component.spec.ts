import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { OrdersHistoryComponent } from './orders-history.component';
import { OrdersHistoryFilterEngineService } from './shared/services';
import { OrdersHistoryFilterEngineServiceMock } from './shared/services/orders-history-filter-engine/orders-history-filter-engine.service.mock';
import { OrdersHistoryFilterComponent } from './orders-history-filter';
import { OrdersHistoryGroup } from './shared/models';
import { ORDERS_HISTORY } from './shared/consts';
import { OrdersHistoryTableComponent } from './orders-history-table';

@Component({
  selector: 'app-orders-history-filter',
  template: '',
  providers: [{ provide: OrdersHistoryFilterComponent, useClass: OrdersHistoryFilterComponentStubComponent }],
})
class OrdersHistoryFilterComponentStubComponent {
  form = new FormGroup<OrdersHistoryGroup>({
    isPending: new FormControl(null),
    isInProgress: new FormControl(null),
    isCompleted: new FormControl(null),
    productLine: new FormControl('', { nonNullable: true }),
    fromDate: new FormControl(new Date(2022, 0, 1)),
    toDate: new FormControl(new Date(2022, 11, 31)),
    query: new FormControl('', { nonNullable: true }),
  });
}

describe('OrdersHistoryComponent', () => {
  let component: OrdersHistoryComponent;
  let fixture: ComponentFixture<OrdersHistoryComponent>;
  let ordersHistoryFilterEngineService: OrdersHistoryFilterEngineService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [OrdersHistoryComponent, OrdersHistoryFilterComponentStubComponent, OrdersHistoryTableComponent],
      providers: [{ provide: OrdersHistoryFilterEngineService, useClass: OrdersHistoryFilterEngineServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryComponent);
    component = fixture.componentInstance;
    ordersHistoryFilterEngineService = TestBed.inject(OrdersHistoryFilterEngineService);
    fixture.detectChanges();
  });

  describe('"ngAfterViewInit" method', () => {
    beforeEach(() => component.ngAfterViewInit());

    it('should call "applyFilters" from "OrdersHistoryFilterEngineService" after form value changes and set appropriate value for "ordersHistory" property', fakeAsync(() => {
      const order = ORDERS_HISTORY[0];
      const form: FormGroup<OrdersHistoryGroup> = component.ordersHistoryFilterComponent.form;
      spyOn(ordersHistoryFilterEngineService, 'applyFilters').and.returnValue([order]);

      form.controls.query.setValue(order.number.toString());
      tick(100);

      expect(component.ordersHistory).toEqual([order]);
    }));
  });
});
