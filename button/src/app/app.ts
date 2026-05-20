import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  estado: boolean = true;
  cargando: boolean = false;

  CambiarEstado() {

    this.cargando = true;

    setTimeout(() => {

      this.estado = !this.estado;

      this.cargando = false;

    }, 2000);

  }

}


