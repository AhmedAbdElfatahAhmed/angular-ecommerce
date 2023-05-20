import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts()
  {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
  }

  getProductDetails(id:number)
  {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`)
  }
}
