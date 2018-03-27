import { NgModule } from '@angular/core';
import { NgxVoiceModule } from '../core/ngx-voice.module';
import { NgxVoiceWebIntentModule } from './intent/ngx-voice-web-intent.module';
import { NgxVoiceWebSpeechModule } from './speech/ngx-voice-web-speech.module';
import { NgxVoiceWebTextModule } from './text/ngx-voice-web-text.module';

@NgModule({
  imports: [
    NgxVoiceModule,
    NgxVoiceWebSpeechModule.forRoot(), 
    NgxVoiceWebTextModule.forRoot(), 
    NgxVoiceWebIntentModule.forRoot(),
  ]
})
export class NgxVoiceWebModule {

}
