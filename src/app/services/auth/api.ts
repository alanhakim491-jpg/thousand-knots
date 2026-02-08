import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export type AuthResponse = { access_token: string };

export type signupDto = {
  email: string;
  password: string;
  phoneNumber?: string;
};

export type loginDto = {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/auth`;

  signup(dto: signupDto) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/signup`, dto);
  }

  signin(dto: loginDto) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/signin`, dto);
  }
}
