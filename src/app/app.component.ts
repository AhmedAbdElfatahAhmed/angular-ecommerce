import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "angular-ecommerce";
  constructor(private router: Router) {}
  ngOnInit(): void {}

  showFooter(): boolean {
    if (
      this.router.url.includes("product/")
    ) {
      return true;
    }
    return false;
  }
}
