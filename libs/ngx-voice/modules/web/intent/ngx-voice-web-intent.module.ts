import { NgModule } from '@angular/core';
import { NgxVoiceWebIntentService } from './intent.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule],
  providers: [NgxVoiceWebIntentService],
  exports: [NgxVoiceWebIntentService]
})
export class NgxVoiceWebIntentModule {}
