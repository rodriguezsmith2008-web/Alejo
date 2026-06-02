import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { FeaturesModule } from './features/features-module';
import { ProductModule } from "./features/product/product-module";


@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    ProductModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
