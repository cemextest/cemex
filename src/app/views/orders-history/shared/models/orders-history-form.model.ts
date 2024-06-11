import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { OrderProductType } from './order-product-type.model';

export type Nullable<T> = T | null;

export type ExtractFormControl<T> = {
  [K in keyof T]: T[K] extends FormControl<infer U> ? U : T[K];
};

export interface OrdersHistoryGroup {
  isPending: FormControl<Nullable<boolean>>;
  isInProgress: FormControl<Nullable<boolean>>;
  isCompleted: FormControl<Nullable<boolean>>;
  productLine: FormControl<'' | OrderProductType>;
  fromDate: FormControl<Nullable<Date>>;
  toDate: FormControl<Nullable<Date>>;
  query: FormControl<string>;
}

export type OrdersHistoryForm = FormGroup<OrdersHistoryGroup>;

export type OrdersHistoryFormValue = ExtractFormControl<OrdersHistoryGroup>;
