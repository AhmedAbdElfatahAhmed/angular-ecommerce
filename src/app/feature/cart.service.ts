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
      const newCart = [...cart,productWithQuantity];
      localStorage.setItem("cart", JSON.stringify(newCart));
      this.cartProductNO.next(newCart.length);
      this.cartProductsSubj.next(newCart);
    }
  }

  deleteProductFromCart(id: number) {
    const updatedCart = this.getCart().filter(item => item.product.id
      !==id);
    this.cartProductsSubj.next(updatedCart);
    this.cartProductNO.next(updatedCart.length);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  clearAllCart()
  {
    this.cartProductsSubj.next([]);
    this.cartProductNO.next(0);
    localStorage.removeItem('cart');
  }

}
