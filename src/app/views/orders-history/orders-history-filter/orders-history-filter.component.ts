import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzSelectOptionInterface } from 'ng-zorro-antd/select';

import {
  OrderProductType,
  OrderStatusKind,
  OrdersHistoryForm,
  OrdersHistoryFormValue,
  OrdersHistoryGroup,
} from '../shared/models';

@Component({
  selector: 'app-orders-history-filter',
  templateUrl: './orders-history-filter.component.html',
  styleUrl: './orders-history-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersHistoryFilterComponent implements OnInit {
  #form!: OrdersHistoryForm;
  #fb = inject(FormBuilder);
  dateFormat = 'dd.MM.yyyy';

  listOfOption: NzSelectOptionInterface[] = [
    { label: 'All Product Lines', value: '' },
    { label: 'Ready-Mix', value: OrderProductType.ReadyMix },
    { label: 'Cement', value: OrderProductType.Cement },
    { label: 'Aggregates', value: OrderProductType.Aggregates },
  ];

  ngOnInit(): void {
    this.#initForm();
  }

  get form(): FormGroup {
    return this.#form;
  }

  #initForm(): void {
    const fromDateValue = new Date(2022, 0, 1);
    const toDateValue = new Date(2022, 11, 31);

    this.#form = new FormGroup<OrdersHistoryGroup>({
      isPending: new FormControl(null),
      isInProgress: new FormControl(null),
      isCompleted: new FormControl(null),
      productLine: new FormControl('', { nonNullable: true }),
      fromDate: new FormControl(fromDateValue),
      toDate: new FormControl(toDateValue),
      query: new FormControl('', { nonNullable: true }),
    });
  }
}
