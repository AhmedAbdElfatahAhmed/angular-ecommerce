import { ProductsService } from "./../../products.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../product";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  filteredTitle:string = '';
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (res) => (this.products = res),
      error: (err) => console.log("error", err.message),
    });
   if(!this.categories.length)
   {
    this.productsService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
   }
  }
  onOptionSelected(option:HTMLSelectElement)
  {
   const category = option.value;
   if(category==="All Categories")
   {
    this.ngOnInit();
   }
   else{
    this.productsService.getProductsByCategory(category).subscribe({
      next: (res) => (this.products = res),
      error: (err) => console.log("error", err.message),
    });
   }
  }
}
