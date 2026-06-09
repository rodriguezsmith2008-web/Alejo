import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../model/CommentModel';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private API_URL = 'https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10';

  constructor(private http: HttpClient) { }


  getAllComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.API_URL);
  }
}
