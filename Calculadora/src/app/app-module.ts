import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Result } from './result/result';
import { Operaciones } from './operaciones/operaciones';
import { Numeros } from './numeros/numeros';

@NgModule({
  declarations: [
    App,
    Result,
    Operaciones,
    Numeros
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
