import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product = {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  }
  constructor(private productsService:ProductsService,private route:ActivatedRoute){}
  ngOnInit(): void {
   const ID =  this.route.snapshot.params['id']
   this.productsService.getProductDetails(ID).subscribe({
    next:res=>this.product = res,
    error:err=>console.log(err)
   })
  }

}
