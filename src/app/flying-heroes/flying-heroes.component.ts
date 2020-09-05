import { Component, OnInit } from '@angular/core';
import { HEROES }            from '../heroes';

@Component({
    selector: 'app-flying-heroes',
    templateUrl: './flying-heroes.component.html',
    styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {

    canFly         = true;
    canMutate         = true;

    heroes: any[]  = [];
    
    constructor() { }

    ngOnInit(): void {
        this.reset();
    }

    addHero(name: string){
        if(!name) return;
        name = name.trim();
	if(1 > name.length) return;
	const hero = {name, canFly: this.canFly};
	if(this.mutate) this.heroes.push(hero);
	else            this.heroes = this.heroes.concat(hero);
    }

    reset(){ this.heroes = HEROES.slice(); }
     
    mutate(checked: boolean) {
        this.canMutate = checked;
    }

    fly(checked: boolean){
        this.canFly    = checked;
    }
}
