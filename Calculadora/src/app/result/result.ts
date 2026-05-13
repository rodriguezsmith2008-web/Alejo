import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: false,
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
@Input() numero:String = "";

}
