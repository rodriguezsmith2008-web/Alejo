import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

@Output() ClickBoton = new EventEmitter<void>();
  @Input() estado: boolean = true;

  EnviarEstado() {
    this.ClickBoton.emit();
  }

}
