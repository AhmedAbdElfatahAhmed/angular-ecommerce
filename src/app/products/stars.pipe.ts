import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stars",
})
export class StarsPipe implements PipeTransform {
  transform(value: number | undefined): string {
    let stars = "";
    if (value) {
      for (let i = 0; i < Math.round(value); i++) {
        stars += "★";
      }
    }
    return stars;
  }
}
