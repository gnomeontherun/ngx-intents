import { Component, HostListener, ChangeDetectorRef } from '@angular/core';

import {
  NgxVoiceWebIntentService,
  NgxVoiceWebSpeechService,
  NgxVoiceConversationService,
  NgxVoiceWebTextService,
  NgxVoiceGoogleIntentService
} from 'ngx-voice';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private intentService: NgxVoiceGoogleIntentService,
    private speechService: NgxVoiceWebSpeechService,
    private conversationService: NgxVoiceConversationService,
    private textService: NgxVoiceWebTextService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.conversationService.userStream.subscribe(event => {
      this.intentService.match(event.text, environment.dialogflow.bearerid, environment.dialogflow.sessionid).subscribe(result => {
        if (result.result && result.result.metadata && result.result.metadata.intentName) {
            this.gotoPage(result.result.parameters.Page);
        }
      });
    });
  }

  gotoPage(page: string) {
    switch (page) {
      case '1': {
         this.router.navigate(['/page1']);
         this.speechService.speak(`You have arrived on page ${page}`);
         break;
      }
      case 'to': {
         this.router.navigate(['/page2']);
         this.speechService.speak(`You have arrived on page ${page}`);
         break;
      }
      case '3': {
         this.router.navigate(['/page3']);
         this.speechService.speak(`You have arrived on page ${page}`);
         break;
      }
      default: {
        this.speechService.speak('Unknown route. Staying put.');
        break;
      }
   }
  }

  @HostListener('document:keyup', ['$event.code'])
  listen(code) {
    if (code === 'Space') {
      this.speechService.listen();
    } else if (code === 'Escape') {
      this.speechService.cancel();
    }
  }
}
