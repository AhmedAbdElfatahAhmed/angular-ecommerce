import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute){}
  @Input() item: Product = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  };
  @Input() id:number = 0;
  ngOnInit(): void {}

  onNavigate()
  {
  this.router.navigate(['product',this.id],{relativeTo: this.route});
  }
}
