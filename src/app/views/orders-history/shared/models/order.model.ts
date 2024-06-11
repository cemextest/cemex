import { OrderStatusKind } from './order-status-kind.model';
import { OrderProductType } from './order-product-type.model';

export interface Order {
  status: OrderStatusKind;
  number: number;
  type: OrderProductType;
  description: string;
  quantity: number;
  uom: string;
  requestedDate: Date;
}
