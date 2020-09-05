import { Pipe, PipeTransform } from '@angular/core';
import { FlyingHeroesPurePipe }    from './flying-heroes-pure.pipe';

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPurePipe{ }
