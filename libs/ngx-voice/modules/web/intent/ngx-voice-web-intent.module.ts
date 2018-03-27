import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxVoiceWebIntentService } from './intent.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule]
})
export class NgxVoiceWebIntentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxVoiceWebIntentModule,
      providers: [NgxVoiceWebIntentService]
    }
  }
}