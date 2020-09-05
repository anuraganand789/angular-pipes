import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'repeatString' })
export class RepeatStringPipe implements PipeTransform {

  transform(word: string, noOfTimes?: number): string{
    let str   = "";
    let count = noOfTimes;

    while(count-- > 0) str += word;

    return str;
  }

}
