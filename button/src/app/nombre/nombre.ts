import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  standalone: false,
  templateUrl: './nombre.html',
  styleUrl: './nombre.scss',
})
export class Nombre {
@Input() estado: boolean = true;

  Nombre: String[] = ["pepe","pipo","popo","pupu"];
}
