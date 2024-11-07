export interface CrearUsuario {
  nombre: string;
  email: string;
  contrasena: string;
}

export interface ActualizarUsuario extends CrearUsuario {
  id: number;
}

export interface Usuario extends CrearUsuario {
  usuarioId: number;
}
