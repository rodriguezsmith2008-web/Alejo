import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { FeaturesModule } from './features/features-module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FeaturesModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient() 
  ],
  bootstrap: [App]
})
export class AppModule { }
