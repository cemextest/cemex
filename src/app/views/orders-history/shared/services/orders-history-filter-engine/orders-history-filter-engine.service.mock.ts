import { OrdersHistoryFilterEngineService } from './orders-history-filter-engine.service';
import { Order, OrdersHistoryFormValue } from '../../models';

export class OrdersHistoryFilterEngineServiceMock implements OrdersHistoryFilterEngineService {
  applyFilters(_filters: OrdersHistoryFormValue): Order[] {
    return [];
  }
}
