import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxVoiceWebSpeechService } from './speech.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule]
})
export class NgxVoiceWebSpeechModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxVoiceWebSpeechModule,
      providers: [NgxVoiceWebSpeechService]
    }
  }
}
