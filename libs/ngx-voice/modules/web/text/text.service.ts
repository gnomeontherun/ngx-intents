import { Injectable } from '@angular/core';
import { NgxVoiceText } from '../../core/services/text.interface';

/**
 * Service for handling speech-to-text using the web SpeechRecognition API
 */
@Injectable()
export class NgxVoiceWebTextService implements NgxVoiceText {
    private synth: SpeechSynthesis = window.speechSynthesis;

    /**
     * Speak a response to the user
     */
    speak(text: string) {
        const utterance = new SpeechSynthesisUtterance(text);
        this.synth.speak(utterance);
    }

    /**
     * Cancel the speaking queue
     */
    cancel() {
        this.synth.cancel();
    }
}