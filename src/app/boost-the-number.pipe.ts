import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'boostTheNumber' })
export class BoostTheNumberPipe implements PipeTransform {

  transform(num: number, factor?: number): number{
    return Math.pow(num, isNaN(factor) ? 1 : factor);
  }

}
