import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[]=[];
  constructor(private cartService:CartService){}
  ngOnInit(): void {

  this.cartService.cartProductsSubj.subscribe((res)=>
  {   
    this.products.push(...res);
  })
  }

}
