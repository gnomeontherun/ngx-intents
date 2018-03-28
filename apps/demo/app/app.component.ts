import { Component, HostListener } from '@angular/core';
import { NgxVoiceWebIntentService, NgxVoiceWebSpeechService, NgxVoiceConversationService, NgxVoiceWebTextService } from 'ngx-voice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private intentService: NgxVoiceWebIntentService, 
    private speechService: NgxVoiceWebSpeechService,
    private conversationService: NgxVoiceConversationService,
    private textService: NgxVoiceWebTextService,
    private router: Router
  ) {
    
    this.conversationService.userStream.subscribe(event => {
      const match = this.intentService.match(event.text);
      if (match) {
        switch(match[1]) {
          case 'home': 
            this.router.navigateByUrl('/page1'); 
            this.conversationService.agentSaid('Going to home');
            break;
          case 'page 1': 
            this.router.navigateByUrl('/page1'); 
            this.conversationService.agentSaid('Going to page one');
            break;
          case 'page 2': 
            this.router.navigateByUrl('/page2'); 
            this.conversationService.agentSaid('Going to page two');
            break;
          case 'page 3': 
            this.router.navigateByUrl('/page3'); 
            this.conversationService.agentSaid('Going to page three');
            break;
        }
      }
    });

    this.intentService.addIntentions([{
      name: 'navigate',
      patterns: [
        /go to (.*)/i,
        /navigate to (.*)/i,
        /view (.*)/i
      ]
    }]);
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
