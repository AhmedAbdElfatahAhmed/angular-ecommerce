import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit'
})
export class WordLimitPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let words = value.split(' ');
    if (words.length > limit) {
      words = words.slice(0, limit);
      return words.join(' ') + ' .....';
    }

    return value;
  }

}
