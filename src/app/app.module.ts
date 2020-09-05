import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatStringPipe } from './repeat-string.pipe';
import { BoostTheNumberPipe } from './boost-the-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepeatStringPipe,
    BoostTheNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
