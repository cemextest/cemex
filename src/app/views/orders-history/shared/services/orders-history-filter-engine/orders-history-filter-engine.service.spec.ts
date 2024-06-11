import { TestBed } from '@angular/core/testing';

import { OrdersHistoryFilterEngineService } from './orders-history-filter-engine.service';
import { OrderProductType, OrdersHistoryFormValue } from '../../models';
import { ORDERS_HISTORY } from '../../consts';

describe('OrdersHistoryFilterEngineService', () => {
  let service: OrdersHistoryFilterEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersHistoryFilterEngineService],
    });
    service = TestBed.inject(OrdersHistoryFilterEngineService);
  });

  describe('"applyFilters" method', () => {
    it('should return all orders if no filters are applied', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: false,
        isCompleted: false,
        productLine: '',
        fromDate: null,
        toDate: null,
        query: '',
      };

      const result = service.applyFilters(filters);

      expect(result).toEqual(ORDERS_HISTORY);
    });

    it('should filter orders by "OrderStatusKind.Pending" status', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: true,
        isInProgress: false,
        isCompleted: false,
        productLine: '',
        fromDate: null,
        toDate: null,
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[1], ORDERS_HISTORY[2]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by "OrderStatusKind.InProgress" status', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: true,
        isCompleted: false,
        productLine: '',
        fromDate: null,
        toDate: null,
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[0]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by "OrderStatusKind.Completed" status', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: false,
        isCompleted: true,
        productLine: '',
        fromDate: null,
        toDate: null,
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[3], ORDERS_HISTORY[4], ORDERS_HISTORY[5]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by "OrderStatusKind.Pending" and "OrderStatusKind.InProgress" statuses', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: true,
        isInProgress: true,
        isCompleted: false,
        productLine: '',
        fromDate: null,
        toDate: null,
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[0], ORDERS_HISTORY[1], ORDERS_HISTORY[2]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by "OrderProductType.Cement" product line', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: false,
        isCompleted: false,
        productLine: OrderProductType.Cement,
        fromDate: null,
        toDate: null,
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[1], ORDERS_HISTORY[4]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by date range', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: false,
        isCompleted: false,
        productLine: '',
        fromDate: new Date(2022, 3, 1),
        toDate: new Date(2022, 4, 1),
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[4]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by query (order is 3305)', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: false,
        isCompleted: false,
        productLine: '',
        fromDate: null,
        toDate: null,
        query: '3305',
      };
      const expectedResult = [ORDERS_HISTORY[1]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by combination of status and date range', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: true,
        isInProgress: false,
        isCompleted: false,
        productLine: '',
        fromDate: new Date(2022, 8, 1),
        toDate: new Date(2022, 9, 30),
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[1], ORDERS_HISTORY[2]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should filter orders by combination of status, product line, and date range', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: false,
        isInProgress: false,
        isCompleted: true,
        productLine: OrderProductType.Aggregates,
        fromDate: new Date(2022, 4, 1),
        toDate: new Date(2022, 5, 1),
        query: '',
      };
      const expectedResult = [ORDERS_HISTORY[3]];

      const result = service.applyFilters(filters);

      expect(result).toEqual(expectedResult);
    });

    it('should return empty list if filters do not match any orders', () => {
      const filters: OrdersHistoryFormValue = {
        isPending: true,
        isInProgress: false,
        isCompleted: false,
        productLine: OrderProductType.Cement,
        fromDate: new Date(2023, 0, 1),
        toDate: new Date(2023, 11, 31),
        query: '9999',
      };

      const result = service.applyFilters(filters);

      expect(result.length).toBe(0);
    });
  });
});
