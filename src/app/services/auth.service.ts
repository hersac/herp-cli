import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILoginRequest, ITokenResponse, ICrearUsuario } from '../models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  private loginUrl = `${this.baseUrl}/auth/login`;
  private registroUrl = `${this.baseUrl}/auth/register`;

  login(credenciales: ILoginRequest): Observable<ITokenResponse> {
    return this.http.post<ITokenResponse>(this.loginUrl, credenciales);
  }

  registro(nuevoUsuario: ICrearUsuario): Observable<any> {
    return this.http.post<any>(this.registroUrl, nuevoUsuario);
  }

  recuperarContrasena(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/recuperar-contrasena`, {
      email,
    });
  }
}
