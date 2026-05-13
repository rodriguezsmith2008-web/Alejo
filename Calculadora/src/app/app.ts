import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  cadena: string = '';
  Resultado: Number = 0;

  recibirNumero(numero: number) {
    this.cadena += numero;
  }

  recibirOperador(Operador: String) {
  if (Operador === "=") {
    this.Calcular();
  } else if (Operador === "C") {
    this.cadena = '';       // limpia la pantalla
    this.Resultado = 0;
  } else {
    this.cadena += Operador;
  }
}

  Calcular() {
    try {
      this.Resultado = eval(this.cadena);
      this.cadena = String(this.Resultado);
    } catch (e) {
      this.cadena = 'Error';
    }
  }
}
