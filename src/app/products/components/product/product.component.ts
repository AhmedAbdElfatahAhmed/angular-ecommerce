import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  @Input() item: Product = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  };
  ngOnInit(): void {}
}
