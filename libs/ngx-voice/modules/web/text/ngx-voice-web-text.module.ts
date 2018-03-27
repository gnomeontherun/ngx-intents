import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxVoiceWebTextService } from './text.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule]
})
export class NgxVoiceWebTextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxVoiceWebTextModule,
      providers: [NgxVoiceWebTextService]
    }
  }
}
