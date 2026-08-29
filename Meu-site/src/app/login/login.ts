import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  modoCadastro = false;
  mostrarSenha = false;
  enviado = false;

  formulario;

  private router = inject(Router);
  private authService = inject(AuthService);

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nome: [''],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        ]
      ],

      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    });

  }


  get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get senha() {
    return this.formulario.get('senha');
  }


  entrar() {

    this.enviado = true;

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const dados = this.formulario.value;

    /*
      Se estiver criando uma conta,
      pega o nome digitado.

      Se estiver fazendo login,
      usa "Usuário" por enquanto.
    */

    const nomeUsuario = this.modoCadastro
      ? dados.nome || 'Usuário'
      : 'Usuário';


    /*
      SALVA O USUÁRIO
    */

    this.authService.login(
      nomeUsuario,
      dados.email!
    );


    console.log('Usuário logado:', {
      nome: nomeUsuario,
      email: dados.email
    });


    /*
      VAI PARA A HOME
    */

    this.router.navigate(['/home']);

  }


  alternarModo() {

    this.modoCadastro = !this.modoCadastro;

    this.enviado = false;

    this.formulario.reset();

  }


  alternarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }


  loginGoogle() {

    console.log('Login com Google clicado');

    // Depois podemos integrar:
    // Firebase Authentication
    // Google Sign-In

  }

}