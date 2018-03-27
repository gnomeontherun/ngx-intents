import {BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxVoiceModule, NgxVoiceWebModule} from 'ngx-voice';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page3Component} from './pages/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    NgxVoiceModule,
    NgxVoiceWebModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
