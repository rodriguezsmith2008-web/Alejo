import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FeaturesModule } from './features/features-module';
import { UsersModule } from "./features/users/users-module";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    UsersModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
