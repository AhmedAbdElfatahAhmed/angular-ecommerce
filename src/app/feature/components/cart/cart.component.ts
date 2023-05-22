import { CartService } from "./../../cart.service";
import { Component, OnInit } from "@angular/core";
import { ProductWithQuantity } from "./../../../products/productWithQuantity";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  products: ProductWithQuantity[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartProductsSubj.subscribe((res) => {
      this.products = res ;
    });
    this.calTotalPrice();
  }
  increaseQun(index: number) {
    this.products[index].Quantity++;
    localStorage.setItem("cart", JSON.stringify(this.products));
  }
  decreaseQun(index: number) {
    if (this.products[index].Quantity > 1) {
      this.products[index].Quantity--;
      localStorage.setItem("cart", JSON.stringify(this.products));
    }
  }
  calTotalPrice() {
    this.total = 0;
    for (let product of this.products) {
      this.total += product.product.price * product.Quantity;
    }
    return this.total;
  }

  onDelete(productId:number)
  {
   this.cartService.deleteProductFromCart(productId);
  }

  clearAll()
  {
   this.cartService.clearAllCart();
  }

}
