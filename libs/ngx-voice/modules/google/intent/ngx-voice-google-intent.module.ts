import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxVoiceGoogleIntentService } from './intent.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule, HttpClientModule]
})
export class NgxVoiceGoogleIntentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxVoiceGoogleIntentModule,
      providers: [NgxVoiceGoogleIntentService]
    }
  }
}