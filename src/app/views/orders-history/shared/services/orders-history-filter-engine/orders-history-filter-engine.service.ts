import { Injectable } from '@angular/core';

import { Order, OrdersHistoryForm, OrdersHistoryFormValue, OrderStatusKind } from '../../models';
import { ORDERS_HISTORY } from '../../consts';
import { negativeBoolean } from '../../../../../shared/helpers';

@Injectable()
export class OrdersHistoryFilterEngineService {
  applyFilters(filters: OrdersHistoryFormValue): Order[] {
    const areFiltersNotApplied = Object.values(filters).every(negativeBoolean);

    if (areFiltersNotApplied) return ORDERS_HISTORY;

    const { isPending, isInProgress, isCompleted, productLine, fromDate, toDate, query } = filters;

    const byConditions = ({ type, status, requestedDate, number }: Order): boolean => {
      const statusMatch =
        (!isPending && !isInProgress && !isCompleted) ||
        (isPending && status === OrderStatusKind.Pending) ||
        (isInProgress && status === OrderStatusKind.InProgress) ||
        (isCompleted && status === OrderStatusKind.Completed);

      const productLineMatch = !productLine || type === productLine;
      const fromDateMatch = !fromDate || new Date(requestedDate) >= new Date(fromDate);
      const toDateMatch = !toDate || new Date(requestedDate) <= new Date(toDate);
      const queryMatch = !query || number.toString().includes(query);

      return !!statusMatch && productLineMatch && fromDateMatch && toDateMatch && queryMatch;
    };

    return ORDERS_HISTORY.filter(byConditions);
  }
}
