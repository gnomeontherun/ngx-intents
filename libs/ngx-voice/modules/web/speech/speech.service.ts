import { Injectable } from '@angular/core';
import { NgxVoiceConversationService } from '../../core/services/conversation.service';
import { NgxVoiceSpeech } from '../../core/services/speech.interface';

/**
 * Service for handling speech-to-text using the web SpeechRecognition API
 */
@Injectable()
export class NgxVoiceWebSpeechService implements NgxVoiceSpeech {
    private recognizer: SpeechRecognition;

    constructor(private conversation: NgxVoiceConversationService) {}

    /**
     * Begin listening with the mic for user speech, and convert to text
     */
    listen() {
        this.recognizer = new webkitSpeechRecognition();
        this.recognizer.start();

        this.recognizer.onresult = (event) => {
            const text = event.results[0][0].transcript;
            this.conversation.userSaid(text);
            this.cancel();
        };
    }

    speak(message: string): void {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }

    /**
     * Stop listening and end recognition
     */
    cancel() {
        this.recognizer.stop();
    }
}