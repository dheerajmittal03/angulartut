import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    PaymentComponent,
    ListComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
