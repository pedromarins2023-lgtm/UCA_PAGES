import { Injectable, signal } from '@angular/core';

export interface Usuario {
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario = signal<Usuario | null>(
    this.carregarUsuario()
  );


  private carregarUsuario(): Usuario | null {

    const usuarioSalvo = localStorage.getItem('usuario');

    if (usuarioSalvo) {
      return JSON.parse(usuarioSalvo);
    }

    return null;

  }


  login(nome: string, email: string) {

    const usuario: Usuario = {
      nome,
      email
    };

    this.usuario.set(usuario);

    localStorage.setItem(
      'usuario',
      JSON.stringify(usuario)
    );

  }


  logout() {

    this.usuario.set(null);

    localStorage.removeItem('usuario');

  }

}