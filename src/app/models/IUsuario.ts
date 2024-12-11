export interface ICrearUsuario {
  nombre: string;
  email: string;
  contrasena: string;
}

export interface IActualizarUsuario extends ICrearUsuario {
  id: number;
}

export interface IUsuario extends ICrearUsuario {
  usuarioId: number;
}
