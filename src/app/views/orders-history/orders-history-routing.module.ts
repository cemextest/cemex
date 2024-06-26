import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { OrdersHistoryComponent } from './orders-history.component';

const routes: Routes = [{ path: '', component: OrdersHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersHistoryRoutingModule {}
