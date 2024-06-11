import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { ORDERS_HISTORY } from './shared/consts';
import { Order, OrdersHistoryFormValue, OrderStatusKind } from './shared/models';
import { OrdersHistoryFilterComponent } from './orders-history-filter';
import { debounceTime, map, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { OrdersHistoryFilterEngineService } from './shared/services';

@UntilDestroy()
@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.scss',
  providers: [OrdersHistoryFilterEngineService],
})
export class OrdersHistoryComponent implements AfterViewInit {
  @ViewChild(OrdersHistoryFilterComponent, { static: true })
  private readonly ordersHistoryFilterComponent!: OrdersHistoryFilterComponent;

  ordersHistory: Order[] = ORDERS_HISTORY;

  readonly #ordersHistoryFilterEngineService = inject(OrdersHistoryFilterEngineService);

  ngAfterViewInit(): void {
    this.#handleFilterChanges();
  }

  #handleFilterChanges(): void {
    const toFilteredOrders = (form: OrdersHistoryFormValue) =>
      this.#ordersHistoryFilterEngineService.applyFilters(form);
    const setValues = (orders: Order[]) => (this.ordersHistory = orders);

    this.ordersHistoryFilterComponent.form.valueChanges
      .pipe(debounceTime(100), map(toFilteredOrders), tap(setValues), untilDestroyed(this))
      .subscribe();
  }
}
