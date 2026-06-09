import { Component, Input } from '@angular/core';
import { CommentModel } from '../../model/CommentModel';

@Component({
  selector: 'comment-card',
  standalone: false,
  templateUrl: './comment-card.html',
  styleUrl: './comment-card.scss',
})
export class CommentCard {
  @Input() comment!: CommentModel;
}
