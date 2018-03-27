import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { concat } from 'rxjs/observable/concat';
import { NgxVoiceMessage } from './message.interface';

/**
 * Service to track the conversation messages
 */
@Injectable()
export class NgxVoiceConversationService {
    /**
     * Holds the messages sent by the user
     */
    private user = new Subject<NgxVoiceMessage>();

    /**
     * Holds the messages sent by the agent
     */
    private agent = new Subject<NgxVoiceMessage>();

    /**
     * Stream of user utterances
     */
    get userStream() {
        return this.user.asObservable();
    }
    
    /**
     * Stream of agent responses
     */
    get agentStream() {
        return this.user.asObservable();
    }

    /**
     * Combined stream of user and agent conversation
     */
    get stream(): Observable<NgxVoiceMessage> {
        return concat(this.userStream, this.agentStream);
    }

    /**
     * Passes new messages to user stream
     */
    userSaid(text: string): void {
        this.user.next({
            text,
            source: 'user'
        });
    }

    /**
     * Passes new messages to the agent stream
     */
    agentSaid(text: string):  void {
        this.agent.next({
            text,
            source: 'agent'
        });
    }
}