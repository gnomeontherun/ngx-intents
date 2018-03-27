import { NgModule } from '@angular/core';
import { NgxVoiceModule } from '../core/ngx-voice.module';
import { NgxVoiceWebSpeechModule } from './speech/ngx-voice-web-speech.module';
import { NgxVoiceWebTextModule } from './text/ngx-voice-web-text.module';

@NgModule({
  imports: [NgxVoiceModule],
  exports: [NgxVoiceWebSpeechModule, NgxVoiceWebTextModule]
})
export class NgxVoiceWebModule {}
