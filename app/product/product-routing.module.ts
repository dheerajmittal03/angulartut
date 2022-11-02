import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [{path: 'product',children:[{path:'list' ,component :ListComponent},
{path:'price',component:PriceComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
