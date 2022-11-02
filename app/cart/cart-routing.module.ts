import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListComponent } from './list/list.component';
import { PaymentComponent } from './payment/payment.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [{path:'cart',children:[{path:'checkout', component:CheckoutComponent},
{path:'payment',component: PaymentComponent},
{path:'list',component: ListComponent},
{path:'price',component: PriceComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
  ]
})
export class CartRoutingModule { }
