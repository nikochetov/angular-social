import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  register(user): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

}
