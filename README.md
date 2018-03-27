<<<<<<< HEAD
# ngx-voice

`ngx-voice` is an Angular library designed to make it easy to develop features that use voice and text to resolve actions. Think of it as a way to quickly listen to what a user says, and react on the screen by determining their intention (such as 'navigate to the FAQ').

## Installation

To begin, add `ngx-voice` to your project.

```bash
npm install ngx-voice --save
```

Then you'll need to add the module to your Angular project. In your app.module.ts file make the following changes:

```typescript
import {NgxVoiceModule} from 'ngx-voice';

@NgModule({
    //..other module config
    imports: [
        //...other imports
        NgxVoiceModule.forRoot()
    ]
});
```

This will initialize the voice service with the default browser APIs adapters. 

## Usage

Steps to use project go here.

## Examples

Here are several quick examples of how this library can be used, and what it can do for you.

### Example 1 - Browser Web API Adapters

Some browsers support the Web Speech APIs, which allow the browser to do speech recognition (for transcribing speech to text) and speech synthesis (for converting text to audio). In this example, we'll setup some basic navigation using the built in browser capabilities.

```
@TODO Example
```

### Example 2 - Google Cloud API Adapters

You can leverage the Google Cloud API services (Text-to-Speech, Speech, and Dialogflow) for handling your voice interactions. In this example, we'll use it to move an object around on the screen.

```
@TODO Example
```

### Example 2 - AWS API Adapters

The AWS ML services (Lex, Polly, and Transcribe) for resolving your voice commands. Here we'll build an example that helps fill out a form.

```
@TODO Example
```

## Contributors

[Jeremy Wilken](https://github.com/gnomeontherun)
[Matt Hippely](https://github.com/hipee-lee)

## License

MIT. See the [LICENSE](LICENSE).
=======
# NgxVoice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
>>>>>>> chore: initial commit from @angular/cli
