import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../products/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartProductsSubj = new BehaviorSubject<Product[]>([]);
  cartProductNO = new BehaviorSubject<number>(0);
  cartLocalStorage = localStorage.getItem("cart");
  constructor() {
    if (this.cartLocalStorage) {
      const cartData = JSON.parse(this.cartLocalStorage);
      this.cartProductsSubj.next(cartData);
      this.cartProductNO.next(cartData.length);
    }
  }
  getCart(): Product[] {
    return this.cartProductsSubj.getValue();
  }
  addtoCart(product: Product): void {
    const cart = this.getCart();
    const exisiting = cart.find((item) => item.id === product.id);
    if (exisiting) {
      alert("exist");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.cartProductNO.next(cart.length);
      this.cartProductsSubj.next(cart);
    }
  }
}
