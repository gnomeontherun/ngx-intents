import { NgModule } from '@angular/core';
import { NgxVoiceWebTextService } from './text.service';
import { NgxVoiceModule } from '../../core/ngx-voice.module';

@NgModule({
  imports: [NgxVoiceModule],
  providers: [NgxVoiceWebTextService],
  exports: [NgxVoiceWebTextService]
})
export class NgxVoiceWebTextModule {}
