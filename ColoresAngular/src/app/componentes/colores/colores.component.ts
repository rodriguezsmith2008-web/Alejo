import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colores',
  standalone: false,
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.scss'
})
export class ColoresComponent {
 @Output() colorSlect = new EventEmitter<string>();

   enviarColor(color:string ){
    this.colorSlect.emit(color)
 }
 
 Colores=[
  {nombre:'Rojo', codigo:'#FF0000'},
  {nombre:'Verde', codigo:'#00FF00'},
  {nombre:'Azul', codigo:'#0000FF'},
  {nombre:'Amarillo', codigo:'#FFFF00'},
 ]


}
