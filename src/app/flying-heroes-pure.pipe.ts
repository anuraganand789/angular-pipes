import { Pipe, PipeTransform } from '@angular/core';
import { Flyer }               from './heroes';

@Pipe({ name: 'flyingHeroesPure' })
export class FlyingHeroesPurePipe implements PipeTransform {

  transform(heroes: Flyer[]): any[]{
    return heroes.filter(hero => hero.canFly);
  }

}
