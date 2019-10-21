import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamAbbreviation'
})
export class TeamAbbreviationPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value
      .split(' ')
      .map((s, i, arr) => {
        // dont abbreviate last word
        if(i < arr.length - 1) {
          // return first character plus '.'
          return s[0] + '.';
        } return s;
      })
      .join('');
  }

}
