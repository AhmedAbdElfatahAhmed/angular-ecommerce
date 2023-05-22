import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./product";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterString: string): Product[] {
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const result = value.filter((item) => {
      return item.title.toLowerCase().includes(filterString.toLowerCase());
    });
    return result;
  }
}
