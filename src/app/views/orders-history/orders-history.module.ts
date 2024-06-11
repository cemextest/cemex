import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';

import { OrdersHistoryComponent } from './orders-history.component';
import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { OrdersHistoryFilterComponent } from './orders-history-filter';
import { OrdersHistoryTableComponent } from './orders-history-table';
import { EmptyStateComponent } from '../../shared/components';

@NgModule({
  declarations: [OrdersHistoryComponent, OrdersHistoryFilterComponent, OrdersHistoryTableComponent],
  imports: [
    CommonModule,
    OrdersHistoryRoutingModule,
    NzCheckboxComponent,
    FormsModule,
    ReactiveFormsModule,
    NzSelectComponent,
    NzOptionComponent,
    NzDatePickerComponent,
    NzInputGroupComponent,
    NzInputDirective,
    EmptyStateComponent,
  ],
})
export class OrdersHistoryModule {}
