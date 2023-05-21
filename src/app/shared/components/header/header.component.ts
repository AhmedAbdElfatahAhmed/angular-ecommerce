import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../feature/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartProdNumber: number = 0;
  constructor(private cartService:CartService){}
  ngOnInit(): void {
  this.cartService.cartProductNO.subscribe(res=>
    {
      this.cartProdNumber = res;
    })
  }

}
