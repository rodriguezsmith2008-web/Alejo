import { Component, Input } from '@angular/core';
import { CommentModel } from '../../model/CommentModel';

@Component({
  selector: 'comment-list-page',
  standalone: false,
  templateUrl: './comment-list-page.html',
  styleUrl: './comment-list-page.scss',
})
export class CommentListPage {

  @Input() comments: CommentModel[] = [];


}
