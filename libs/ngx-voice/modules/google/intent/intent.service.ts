import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { NgxVoiceIntent } from "../../core/services/intent.interface";

/**
 * Service to process intention mapping using DialogFlow
 */
@Injectable()
export class NgxVoiceGoogleIntentService implements NgxVoiceIntent {
  constructor(private http: HttpClient) {}

  /**
   * Matches spoken requests using DialogFlow
   */
  match(text: string, bearerid: string, sessionid: string): Observable<any> {
    return this.http.get(
      `https://api.dialogflow.com/v1/query?v=20170712&query=${text}&lang=en&sessionId=${sessionid}`,
      {
        headers: {
          Authorization: `Bearer ${bearerid}`
        }
      }
    );
  }
}
