import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    let params = new HttpParams();
       params = params.append('name', username);
       params = params.append('password', password);

    return this.http.get('/api/users', {
      params
    })
  }
}
