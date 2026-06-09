import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { CommentService } from './features/services/comment';
import { CommentModel } from './features/model/CommentModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  comments: CommentModel[] = [];
 
  constructor(
    private commentService: CommentService,
    private cdr: ChangeDetectorRef,
  ) {}
 
  ngOnInit(): void {
    this.commentService.getAllComments().subscribe({
      next: (comments: CommentModel[]) => {
        this.comments = comments;
        this.cdr.detectChanges();
      },
      error: () => {},
      complete: () => {},
    });
  }
}
