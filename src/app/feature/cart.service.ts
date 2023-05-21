import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../products/product";
import { ProductWithQuantity } from "../products/productWithQuantity";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProductsSubj = new BehaviorSubject<ProductWithQuantity[]>([]);
  cartProductNO = new BehaviorSubject<number>(0);
  cartLocalStorage = localStorage.getItem("cart");
  constructor() {
    if (this.cartLocalStorage) {
      const cartData = JSON.parse(this.cartLocalStorage);
      this.cartProductsSubj.next(cartData);
      this.cartProductNO.next(cartData.length);
    }
  }
  getCart(): ProductWithQuantity[] {
    return this.cartProductsSubj.getValue();
  }
  addtoCart(product: Product,Quantity:any): void {
    const productWithQuantity ={
      product,
      Quantity
    }
    const cart = this.getCart();
    const exisiting = cart.find((item) => item?.product?.id === product.id);
    if (exisiting) {
      alert("exist");
    } else {
      cart.push(productWithQuantity);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.cartProductNO.next(cart.length);
      this.cartProductsSubj.next(cart);
    }
  }
}
