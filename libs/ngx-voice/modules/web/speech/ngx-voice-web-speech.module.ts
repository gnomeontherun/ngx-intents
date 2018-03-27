import { NgModule } from '@angular/core';
import { NgxVoiceWebSpeechService } from './speech.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule],
  providers: [NgxVoiceWebSpeechService],
  exports: [NgxVoiceWebSpeechService]
})
export class NgxVoiceWebSpeechModule {}
