import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private url = 'https://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:8081/api/books';

  constructor(private httpClient: HttpClient) { }

  getBooks():Observable<any> {
    return this.httpClient.get(this.url);
  }

  getBook(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
}
