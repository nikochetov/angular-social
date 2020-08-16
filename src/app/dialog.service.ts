import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(private http: HttpClient) {
  }

  private apiUrl = 'https://run.mocky.io/v3/219590a8-f55c-4520-9265-be7fa29b76be'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  addUser(user): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user, this.httpOptions).pipe(
      tap(() => console.log('WTF??!!'))
    )
  }
}
