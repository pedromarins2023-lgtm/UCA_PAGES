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
import { GarrinhaChat } from '../shared/garrinha-chat/garrinha-chat';


@Component({
  selector: 'app-home',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    Footer,
    GarrinhaChat
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
  // LEITURA EM VOZ ALTA
  // ========================================

  falaAtual: SpeechSynthesisUtterance | null = null;

  audioFalando = false;

  audioPausado = false;


  // ========================================
  // VOZ SELECIONADA
  // ========================================

  private vozSelecionada: SpeechSynthesisVoice | null = null;

  private vozesDisponiveis: SpeechSynthesisVoice[] = [];


  // ========================================
  // INICIALIZAÇÃO
  // ========================================

  ngAfterViewInit(): void {

    // Carrega as vozes disponíveis
    this.carregarVozes();


    // ========================================
    // CONTADOR DE IMPACTO
    // ========================================

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
  // CARREGAR VOZES DO NAVEGADOR
  // ========================================

  private carregarVozes(): void {

    const carregar = (): void => {

      this.vozesDisponiveis =
        window.speechSynthesis.getVoices();


      // ========================================
      // PROCURA UMA VOZ FEMININA EM PT-BR
      // ========================================

      this.vozSelecionada =
        this.vozesDisponiveis.find(

          voz =>

            voz.lang.toLowerCase() === 'pt-br' &&

            (

              voz.name.toLowerCase().includes('female') ||

              voz.name.toLowerCase().includes('feminina') ||

              voz.name.toLowerCase().includes('female') ||

              voz.name.toLowerCase().includes('francisca') ||

              voz.name.toLowerCase().includes('brenda') ||

              voz.name.toLowerCase().includes('elza') ||

              voz.name.toLowerCase().includes('giovanna') ||

              voz.name.toLowerCase().includes('leila') ||

              voz.name.toLowerCase().includes('manuela') ||

              voz.name.toLowerCase().includes('thalia') ||

              voz.name.toLowerCase().includes('yara')

            )

        )

        // ========================================
        // CASO NÃO ENCONTRE,
        // PROCURA MICROSOFT / GOOGLE
        // ========================================

        ??

        this.vozesDisponiveis.find(

          voz =>

            voz.lang.toLowerCase() === 'pt-br' &&

            (

              voz.name.toLowerCase().includes('microsoft') ||

              voz.name.toLowerCase().includes('google')

            )

        )

        // ========================================
        // CASO NÃO ENCONTRE,
        // PEGA QUALQUER PT-BR
        // ========================================

        ??

        this.vozesDisponiveis.find(

          voz =>

            voz.lang.toLowerCase() === 'pt-br'

        )

        ??

        null;

    };


    // Algumas versões do navegador
    // carregam as vozes depois

    carregar();


    window.speechSynthesis.onvoiceschanged =
      carregar;

  }


  // ========================================
  // INICIAR LEITURA EM VOZ ALTA
  // ========================================

  lerTexto(texto: string): void {

    // Cancela qualquer leitura anterior
    window.speechSynthesis.cancel();


    // ========================================
    // CRIA A FALA
    // ========================================

    const fala =
      new SpeechSynthesisUtterance(texto);


    // ========================================
    // PORTUGUÊS DO BRASIL
    // ========================================

    fala.lang = 'pt-BR';


    // ========================================
    // VOZ SELECIONADA
    // ========================================

    if (this.vozSelecionada) {

      fala.voice =
        this.vozSelecionada;

    }


    // ========================================
    // VELOCIDADE
    // ========================================

    fala.rate = 0.88;


    // ========================================
    // TOM
    // ========================================

    fala.pitch = 1.05;


    // ========================================
    // VOLUME
    // ========================================

    fala.volume = 1;


    // Guarda a fala atual

    this.falaAtual = fala;


    // ========================================
    // QUANDO COMEÇAR
    // ========================================

    fala.onstart = () => {

      this.audioFalando = true;

      this.audioPausado = false;

    };


    // ========================================
    // QUANDO TERMINAR
    // ========================================

    fala.onend = () => {

      this.audioFalando = false;

      this.audioPausado = false;

      this.falaAtual = null;

    };


    // ========================================
    // SE DER ERRO
    // ========================================

    fala.onerror = () => {

      this.audioFalando = false;

      this.audioPausado = false;

      this.falaAtual = null;

    };


    // ========================================
    // INICIA A LEITURA
    // ========================================

    window.speechSynthesis.speak(fala);

  }


  // ========================================
  // PAUSAR / CONTINUAR LEITURA
  // ========================================

  pausarOuContinuar(): void {

    // Se não estiver lendo,
    // não faz nada

    if (!this.audioFalando) {

      return;

    }


    // ========================================
    // CONTINUAR
    // ========================================

    if (
      window.speechSynthesis.paused
    ) {

      window.speechSynthesis.resume();

      this.audioPausado = false;

    }


    // ========================================
    // PAUSAR
    // ========================================

    else {

      window.speechSynthesis.pause();

      this.audioPausado = true;

    }

  }


  // ========================================
  // SCROLL
  // ========================================

  @HostListener('window:scroll')

  aoRolarPagina(): void {

    const posicaoAtual =
      window.scrollY;


    // ========================================
    // BOTÃO VOLTAR AO TOPO
    // ========================================

    this.mostrarBotaoTopo =
      posicaoAtual > 400;


    // ========================================
    // HEADER
    // ========================================

    if (posicaoAtual <= 50) {

      this.headerVisivel = true;

    }

    else if (
      posicaoAtual >
      this.ultimaPosicaoScroll
    ) {

      this.headerVisivel = false;

    }

    else {

      this.headerVisivel = true;

    }


    // Guarda a posição atual

    this.ultimaPosicaoScroll =
      posicaoAtual;

  }


  // ========================================
  // INICIAR CONTADORES
  // ========================================

  private iniciarContadores(): void {

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

  ): void {

    const inicio =
      performance.now();


    const atualizar =
      (tempoAtual: number): void => {

        const progresso =
          Math.min(

            (
              tempoAtual -
              inicio
            ) / duracao,

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

  voltarAoTopo(): void {

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  }

}