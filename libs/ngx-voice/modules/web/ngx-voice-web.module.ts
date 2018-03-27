import { NgModule } from '@angular/core';
import { NgxVoiceModule } from '../core/ngx-voice.module';
import { NgxVoiceWebSpeechModule } from './speech/ngx-voice-web-speech.module';

@NgModule({
  imports: [NgxVoiceModule],
  exports: [NgxVoiceWebSpeechModule]
})
export class NgxVoiceWebModule {}
