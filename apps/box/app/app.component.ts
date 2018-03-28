import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { NgxVoiceGoogleIntentService, NgxVoiceWebSpeechService, NgxVoiceConversationService, NgxVoiceWebTextService } from 'ngx-voice';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  left = 50;
  top = 50;

  constructor(
    private intentService: NgxVoiceGoogleIntentService, 
    private speechService: NgxVoiceWebSpeechService,
    private conversationService: NgxVoiceConversationService,
    private textService: NgxVoiceWebTextService,
    private cdRef: ChangeDetectorRef
  ) {
    this.conversationService.userStream.subscribe(event => {
      this.intentService.match(event.text, environment.dialogflow.bearerid, environment.dialogflow.sessionid).subscribe(result => {
        if (result.result && result.result.metadata && result.result.metadata.intentName) {
          switch (result.result.metadata.intentName) {
            case 'move-down': this.moveVertically(5); break;
            case 'move-up': this.moveVertically(-5); break;
            case 'move-right': this.moveHorizontally(5); break;
            case 'move-left': this.moveHorizontally(-5); break;
          }
          this.cdRef.detectChanges();
        }
      });
    });
  }

  moveVertically(amount: number) {
    const newTop = this.top + amount;
    // Test bottom boundary
    if (newTop <= 100) {
      this.top = newTop;
    }
    // Test top boundary
    if (newTop >= 0) {
      this.top = newTop;
    }
  }

  moveHorizontally(amount: number) {
    const newLeft = this.left + amount;
    // Test right boundary
    if (newLeft <= 100) {
      this.left = newLeft;
    }
    // Test bottom boundary
    if (newLeft >= 0) {
      this.left = newLeft;
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