import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectComponent, NzSelectOptionInterface } from 'ng-zorro-antd/select';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';

import { OrdersHistoryFilterComponent } from './orders-history-filter.component';
import { OrderProductType, OrdersHistoryFormValue } from '../shared/models';

describe('OrdersHistoryFilterComponent', () => {
  let component: OrdersHistoryFilterComponent;
  let fixture: ComponentFixture<OrdersHistoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        NzCheckboxComponent,
        NzSelectComponent,
        NzDatePickerComponent,
        NzInputGroupComponent,
        NoopAnimationsModule,
      ],
      declarations: [OrdersHistoryFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init form after call "ngOnInit" method', () => {
    const expectedInitialFormState: OrdersHistoryFormValue = {
      isPending: null,
      isInProgress: null,
      isCompleted: null,
      productLine: '',
      fromDate: new Date(2022, 0, 1),
      toDate: new Date(2022, 11, 31),
      query: '',
    };

    component.ngOnInit();

    expect(component.form.value).toEqual(expectedInitialFormState);
  });

  it('should return FormGroup after call "form" getter', () => {
    component.ngOnInit();

    expect(component.form).toBeInstanceOf(FormGroup);
  });

  it('should define "dateFormat" property', () => {
    expect(component.dateFormat).toBe('dd.MM.yyyy');
  });

  it('should define "listOfOption" property', () => {
    const expectedValue: NzSelectOptionInterface[] = [
      { label: 'All Product Lines', value: '' },
      { label: 'Ready-Mix', value: OrderProductType.ReadyMix },
      { label: 'Cement', value: OrderProductType.Cement },
      { label: 'Aggregates', value: OrderProductType.Aggregates },
    ];

    expect(component.listOfOption).toEqual(expectedValue);
  });
});
