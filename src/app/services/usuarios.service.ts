import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IActualizarUsuario, ICrearUsuario, IUsuario } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  private usuariosUrl = `${this.baseUrl}/usuarios`;
  private headers = this.crearHeader();

  buscarTodos(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.usuariosUrl, this.headers);
  }

  buscarPorId(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.usuariosUrl}/${id}`, this.headers);
  }

  crear(nuevoUsuario: ICrearUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(
      this.usuariosUrl,
      nuevoUsuario,
      this.headers
    );
  }

  actualizar(datosNuevos: IActualizarUsuario): String {
    this.http.put<void>(
      `${this.usuariosUrl}/${datosNuevos.id}`,
      datosNuevos,
      this.headers
    );
    return 'Se actaulizó correctamente';
  }

  eliminar(id: number): String {
    this.http.delete<void>(`${this.usuariosUrl}/${id}`, this.headers);
    return 'Se eliminó correctamente';
  }

  crearHeader(): Object {
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.obtenerToken()}`,
    });
    return { headers: header };
  }

  obtenerToken(): string {
    return JSON.parse(localStorage.getItem('token') as string);
  }
}
