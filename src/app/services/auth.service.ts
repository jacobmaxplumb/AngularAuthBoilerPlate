import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  getTokenObservable(username: string, password: string): Observable<string> {
    return this.http.get<string>(
      `${environment.apiUrl}/token/${username}/${password}`
      );
  }
}
