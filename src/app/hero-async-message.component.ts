import { Component, OnInit } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { map, take }            from 'rxjs/operators';

@Component({
  selector: 'app-hero-async-message',
  templateUrl: './hero-async-message.component.html',
  styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent implements OnInit {

    message$: Observable<string>;

    messages = ["This is the first message", "This is the second message", "This is the third message" ];

    constructor() { }

    ngOnInit(): void {
    }

    sendMessages(){
        this.message$ = interval(500).pipe( 
	                                    map(i => this.messages[i]), 
					    take(this.messages.length)
					  );
    }

}
