import { Component, OnInit } from "@angular/core";
import { LoaderService } from "./../../loader.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loaderService.loadingSub.subscribe((res) => {
      this.isLoading = res;
    });
  }
}
