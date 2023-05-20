import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { WordLimitPipe } from './word-limit.pipe';
import { StarsPipe } from './stars.pipe';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductDetailsComponent,
    WordLimitPipe,
    StarsPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
