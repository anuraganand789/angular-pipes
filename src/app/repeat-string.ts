import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'repeatString'})
export class RepeatString implements PipeTransform{

  transform(value: string, times?: number) : string {
    let str   =  "";
    let count = isNaN(times) ? 1 : times;
    while(count-- > -1) str += value;
    return str;
  }
}
