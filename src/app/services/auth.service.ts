import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { TokenResponse } from '../models/token';
import { Observable } from 'rxjs';
import { CrearUsuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  private loginUrl = `${this.baseUrl}/auth/login`;
  private registroUrl = `${this.baseUrl}/auth/register`;

  login(credenciales: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.loginUrl, credenciales);
  }

  registro(nuevoUsuario: CrearUsuario): Observable<any> {
    return this.http.post<any>(this.registroUrl, nuevoUsuario);
  }

  recuperarContrasena(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/recuperar-contrasena`, {
      email,
    });
  }
}
