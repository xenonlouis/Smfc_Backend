// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/sfmc';
  private accessToken: string | null = null;

  constructor(private http: HttpClient) { }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  refreshToken(): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/refresh-token`, {}).pipe(
      tap(newToken => {
        this.setAccessToken(newToken);
      })
    );
  }
}
