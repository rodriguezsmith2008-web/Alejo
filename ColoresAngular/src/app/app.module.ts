import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColoresComponent } from './componentes/colores/colores.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { CuadroComponent } from './componentes/cuadro/cuadro.component';

@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    BotonComponent,
    CuadroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
