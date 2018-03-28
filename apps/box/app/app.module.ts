import {BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxVoiceModule, NgxVoiceWebSpeechModule, NgxVoiceWebTextModule, NgxVoiceGoogleIntentModule} from 'ngx-voice';

import {AppComponent} from './app.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
  ],
  imports: [
    BrowserModule,
    NgxVoiceModule,
    NgxVoiceWebSpeechModule.forRoot(),
    NgxVoiceWebTextModule.forRoot(),
    NgxVoiceGoogleIntentModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
