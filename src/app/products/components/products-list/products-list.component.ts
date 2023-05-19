import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products:Product[]=[];
  constructor(private productsService:ProductsService){}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next:res=>this.products = res ,
      error:err=>console.log('error',err.message)
    })
  }

}
