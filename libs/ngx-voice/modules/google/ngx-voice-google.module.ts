import { NgModule } from '@angular/core';
import { NgxVoiceModule } from '../core/ngx-voice.module';
import { NgxVoiceGoogleIntentModule } from './intent/ngx-voice-google-intent.module';

@NgModule({
  imports: [
    NgxVoiceModule,
    NgxVoiceGoogleIntentModule.forRoot(),
  ]
})
export class NgxVoiceGoogleModule {

}
