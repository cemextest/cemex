import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Order, OrderProductType, OrderStatusKind } from '../shared/models';

@Component({
  selector: 'app-orders-history-table',
  templateUrl: './orders-history-table.component.html',
  styleUrl: './orders-history-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersHistoryTableComponent {
  @Input({ required: true }) data!: Order[];
  readonly dateFormat = 'dd.MM.YYYY';

  readonly statusLabelMap = new Map<OrderStatusKind, string>([
    [OrderStatusKind.InProgress, 'In Progress'],
    [OrderStatusKind.Pending, 'Pending'],
    [OrderStatusKind.Completed, 'Completed'],
  ]);

  readonly statusColorMap = new Map<OrderStatusKind, string>([
    [OrderStatusKind.InProgress, '#3fa9f5'],
    [OrderStatusKind.Pending, '#fbb03b'],
    [OrderStatusKind.Completed, '#7ac943'],
  ]);

  readonly productTypeLabelMap = new Map<OrderProductType, string>([
    [OrderProductType.ReadyMix, 'Ready-Mix'],
    [OrderProductType.Cement, 'Cement'],
    [OrderProductType.Aggregates, 'Aggregates'],
  ]);

  readonly columns = ['Status', 'Order Number', 'Product Line', 'Product', 'Quantity', 'Date Requested'];
}
