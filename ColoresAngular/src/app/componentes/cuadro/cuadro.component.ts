import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  standalone: false,
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.scss'
})
export class CuadroComponent {
@Input() colores:string = ""
}
