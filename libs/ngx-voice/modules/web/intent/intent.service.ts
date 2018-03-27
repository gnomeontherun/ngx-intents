import { Injectable } from '@angular/core';
import { NgxVoiceIntent } from '../../core/services/intent.interface';

export interface NgxVoiceRegexpIntention {
    name: string;
    patterns: string[]|RegExp[];
    priority?: number;
}

/**
 * Service to process intention mapping using regexp
 */
@Injectable()
export class NgxVoiceWebIntentService implements NgxVoiceIntent {
    private intentions: any[] = [];

    /**
     * Add intentions to the service for processing, sorts by priority so higher priorities will match first
     */
    addIntentions(intentions: NgxVoiceRegexpIntention[]): void {
        this.intentions.push(...intentions);
        this.intentions.sort((a: NgxVoiceRegexpIntention, b: NgxVoiceRegexpIntention) => {
            if (b.priority > a.priority) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    /**
     * Clears the list of intentions
     */
    clearIntentions() {
        this.intentions = [];
    }

    /**
     * Runs a string of text against list of intentions to map and return any matches
     */
    match(text: string): boolean|any[] {
        let result: boolean|any[] = false;
        for (const intention of this.intentions) {
            for (const pattern of intention.patterns) {
                const match = text.match(pattern);
                if (match) {
                    result = match;
                    continue;
                }
            }
            if (result) {
                continue;
            }
        }
        return result;
    }
}