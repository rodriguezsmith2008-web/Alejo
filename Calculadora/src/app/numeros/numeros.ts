import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numeros',
  standalone: false,
  templateUrl: './numeros.html',
  styleUrl: './numeros.scss',
})
export class Numeros {

  @Output() NumeroCLick = new EventEmitter<number>

  
  EnviarNUmero(numero:number){
    this.NumeroCLick.emit(numero)
  }
}
