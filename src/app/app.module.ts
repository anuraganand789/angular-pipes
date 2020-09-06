import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatStringPipe } from './repeat-string.pipe';
import { BoostTheNumberPipe } from './boost-the-number.pipe';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPurePipe } from './flying-heroes-pure.pipe';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatStringPipe,
    BoostTheNumberPipe,
    FlyingHeroesComponent,
    FlyingHeroesPurePipe,
    FlyingHeroesImpurePipe,
    HeroAsyncMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
