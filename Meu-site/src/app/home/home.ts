import {
  Component,
  HostListener,
  inject,
  AfterViewInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { AuthService } from '../auth';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    Footer
  ],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {

  // ========================================
  // AUTENTICAÇÃO
  // ========================================

  authService = inject(AuthService);


  // ========================================
  // MENU MOBILE
  // ========================================

  menuMobileAberto = false;


  fecharMenuMobile(): void {

    this.menuMobileAberto = false;

  }


  // ========================================
  // HEADER
  // ========================================

  headerVisivel = true;

  private ultimaPosicaoScroll = 0;


  // ========================================
  // BOTÃO VOLTAR AO TOPO
  // ========================================

  mostrarBotaoTopo = false;


  // ========================================
  // TEMA
  // ========================================

  temaEscuro = true;


  // ========================================
  // CONTADORES
  // ========================================

  hectares = 0;

  arvores = 0;

  jovens = 0;

  lixo = 0;


  // ========================================
  // VALORES FINAIS
  // ========================================

  private readonly valorHectares = 42;

  private readonly valorArvores = 126250;

  private readonly valorJovens = 250000;

  private readonly valorLixo = 63;


  private contadorIniciado = false;


  // ========================================
  // SCROLL
  // ========================================

  @HostListener('window:scroll')
  aoRolarPagina() {

    const posicaoAtual = window.scrollY;


    // ========================================
    // BOTÃO TOPO
    // ========================================

    if (posicaoAtual > 400) {

      this.mostrarBotaoTopo = true;

    } else {

      this.mostrarBotaoTopo = false;

    }


    // ========================================
    // HEADER
    // ========================================

    if (posicaoAtual <= 50) {

      this.headerVisivel = true;

    }

    else if (
      posicaoAtual > this.ultimaPosicaoScroll
    ) {

      this.headerVisivel = false;

    }

    else {

      this.headerVisivel = true;

    }


    this.ultimaPosicaoScroll =
      posicaoAtual;
  }


  // ========================================
  // CONTADOR
  // ========================================

  ngAfterViewInit() {

    const secaoImpacto =
      document.querySelector('#impacto');

    if (!secaoImpacto) {

      return;

    }


    const observer =
      new IntersectionObserver(

        (entries) => {

          if (
            entries[0].isIntersecting &&
            !this.contadorIniciado
          ) {

            this.contadorIniciado = true;

            this.iniciarContadores();

            observer.disconnect();

          }

        },

        {
          threshold: 0.3
        }

      );


    observer.observe(secaoImpacto);
  }


  // ========================================
  // INICIAR CONTADORES
  // ========================================

  private iniciarContadores() {

    this.animarContador(
      'hectares',
      this.valorHectares,
      1500
    );


    this.animarContador(
      'arvores',
      this.valorArvores,
      2200
    );


    this.animarContador(
      'jovens',
      this.valorJovens,
      2200
    );


    this.animarContador(
      'lixo',
      this.valorLixo,
      1500
    );

  }


  // ========================================
  // ANIMAÇÃO DOS CONTADORES
  // ========================================

  private animarContador(
    tipo:
      | 'hectares'
      | 'arvores'
      | 'jovens'
      | 'lixo',

    valorFinal: number,

    duracao: number
  ) {

    const inicio =
      performance.now();


    const atualizar =
      (tempoAtual: number) => {

        const progresso =
          Math.min(
            (tempoAtual - inicio) /
            duracao,
            1
          );


        const progressoSuave =
          1 -
          Math.pow(
            1 - progresso,
            3
          );


        const valorAtual =
          Math.floor(
            progressoSuave *
            valorFinal
          );


        this[tipo] =
          valorAtual;


        if (progresso < 1) {

          requestAnimationFrame(
            atualizar
          );

        }

        else {

          this[tipo] =
            valorFinal;

        }

      };


    requestAnimationFrame(
      atualizar
    );

  }


  // ========================================
  // VOLTAR AO TOPO
  // ========================================

  voltarAoTopo() {

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  }

}