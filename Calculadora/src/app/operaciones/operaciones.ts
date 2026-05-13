import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  standalone: false,
  templateUrl: './operaciones.html',
  styleUrl: './operaciones.scss',
})
export class Operaciones {
 @Output() OperacionCLick = new EventEmitter<String>();

 EnviarOperador(Operador:String){
  this.OperacionCLick.emit(Operador) 
 }

}
