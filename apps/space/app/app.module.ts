import {BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxVoiceModule, NgxVoiceWebModule} from 'ngx-voice';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxVoiceModule,
    NgxVoiceWebModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
