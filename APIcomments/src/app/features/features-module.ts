import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCard } from './components/comment-card/comment-card';
import { CommentListPage} from './pages/comment-list-page/comment-list-page';




@NgModule({
  declarations: [
    CommentCard,
    CommentListPage
  ],
  imports: [
    CommonModule
  ], exports:[
    CommentListPage
  ]
})
export class FeaturesModule { }
