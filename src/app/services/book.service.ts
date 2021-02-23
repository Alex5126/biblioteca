import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { BasicResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string = `${environment.apiUrl}/books`;

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }

  getBookById(id:any):Observable<Book>{
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  addBook(book:Book):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(this.url,book);
  }

  updateBook(book:Book):Observable<BasicResponse>{
    return this.http.put<BasicResponse>(`${this.url}/${book.id}`,book);
  }

  deleteBook(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${this.url}/${id}`);
  }

}
