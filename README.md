# ngx-voice

`ngx-voice` is an Angular library designed to make it easy to develop features that react to voice conversation. It can use use voice and text to resolve actions. Think of it as a way to quickly listen to what a user says, and react on the screen by determining their intention (such as 'navigate to the FAQ').

## How it works

`ngx-voice` is designed to allow you to use different types of services to handle speech to text, intention mapping, and text to speech capabilities.

First, the application has to capture the user's microphone and be able to listen to what is said. This is speech to text, and some browsers have this capability built into the browser using the [Web SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). This automatically provides a transcript of what the person spoke directly in the browser without external services. In the future, other speech to text services are planned to be supported like Amazon Transcribe and Google Speech-to-Text.

Secondly, once an application has the text, it has to determine what the user _meant_. This is intention mapping, where the meaning of the words are understood. It essentially should return actionable data to the application to handle, or in other words take the semistructured spoken text and return a structured, normalized JSON object. This can be done in the browser with basic regular expressions, which are not very robust but can work in small and simple examples. Also supported is using DialogFlow, from Google. In the future support for other services like Amazon Lex or custom NLP solutions are planned.

Finally, the application responds to the intention as necessary, and can optionally speak back to the user. This is text to speech, and like speech recognition is it the [Web SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). This makes it easy to have a snippet of text read back to the user in response, such as a confirmation of understanding. Support for other services, like Amazon Polly and Google Cloud Speech are planned.

It is still up to the application to decide _what to do_ with the user's request, but these tools are here to help simplify the implementation of conversational experiences.

## Limitations

These demos are only functional in recent versions of Chrome and Firefox currently. Work is planned to expand support for other browsers by the use of polyfills and fallbacks.

## Installation

To begin, add `ngx-voice` to your project.

```bash
npm install ngx-voice --save
```

Then you'll need to add the module to your Angular project. In your app.module.ts, add the two imports below.

```typescript
import {NgxVoiceModule, NgxVoiceWebModule} from 'ngx-voice';

@NgModule({
    //..other module config
    imports: [
        //...other imports
        NgxVoiceModule,
        NgxVoiceWebModule,
    ]
});
```

This will initialize the voice service with the default browser APIs adapters.

If you plan to use the DialogFlow adapter for intentions, you'll need to also import `NgxVoiceGoogleModule` to get it setup.

You can also import just the specific modules you need, like `NgxVoiceWebIntentModule.forRoot()`. See the list of modules [here](libs/ngx-voice/modules). They need to be initialized with `.forRoot()` as well.

## Usage

Once you have the library installed, you can use it in any controller of your application. We'll look at the following with a DialogFlow example.

First, you'll need to import the services you intend to use into your file.

```typescript
import {
    NgxVoiceWebSpeechService,
    NgxVoiceConversationService,
    NgxVoiceWebTextService,
    NgxVoiceGoogleIntentService
} from 'ngx-voice';
```

Then you'll need to inject those services into your controller, just like other Angular services.

```typescript
constructor(
    private intentService: NgxVoiceGoogleIntentService,
    private speechService: NgxVoiceWebSpeechService,
    private conversationService: NgxVoiceConversationService,
    private textService: NgxVoiceWebTextService,
) {}
```

You need to setup a way to trigger the speech to text service, in this case it is using the key up event and checking if the key pressed was the spacebar or escape to start or stop listening.

```typescript
@HostListener('document:keyup', ['$event.code'])
listen(code) {
    if (code === 'Space') {
        this.speechService.listen();
    } else if (code === 'Escape') {
        this.speechService.cancel();
    }
}
```

Now you need to listen to the user's stream for new requests as they make them, probably inside of your OnInit method or constructor. Once they do, you pass the text to the intent service and wait for a response. Once the response is given, you get the JSON object from DialogFlow and then decide what to do.

```typescript
this.conversationService.userStream.subscribe(event => {
    this.intentService.match(event.text, environment.dialogflow.bearerid environment.dialogflow.sessionid).subscribe(result => {
        // Here you get the response from DialogFlow, and decide what to do with your app
    });
});
```

When you want to speak to the user, you use the text service to synthesize speech.

```typescript
this.textService.speak(`Welcome to the future!`);
```

## Examples

Here are several quick examples of how this library can be used, and what it can do for you. You can clone this repo and run them locally yourself. You'll need the Angular CLI installed.

```
git clone https://github.com/gnomeontherun/angular-voice-services
cd angular-voice-services
npm install
ng serve
```

### Example 1 - Browser Web API Adapters

Some browsers support the Web Speech APIs, which allow the browser to do speech recognition (for transcribing speech to text) and speech synthesis (for converting text to audio). 

* [Demo application](apps/demo) - In this example, we navigate between different pages and use some basic regexp to match the rules.

### Example 2 - Google Cloud API Adapters

You can leverage the Google Cloud API services (currently only DialogFlow) for handling your voice interactions. 

* [Box example](apps/box) - In this example, we'll use it to move an object around on the screen. There are several intents setup in a DialogFlow project that match to basic commands. To run this example run `ng serve --app box`.
* [Demo application rebuild](apps/nav-dialogflow) - In this example, we rebuild the demo above for navigating between different pages, but use DialogFlow to resolve the navigation. To run this example run `ng serve --app nav-dialogflow`.

## Contributors

* [Jeremy Wilken](https://github.com/gnomeontherun)
* [Matt Hippely](https://github.com/hipee-lee)

## License

MIT. See the [LICENSE](LICENSE).
