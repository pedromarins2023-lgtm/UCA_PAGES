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
  // INFORMAÇÕES DO MANGUEZAL
  // ========================================

  informacaoSelecionada: any = null;


  informacoesManguezal: {
    [key: string]: {
      icone: string;
      titulo: string;
      texto: string;
    }
  } = {

    caranguejo: {
      icone: '🦀',
      titulo: 'Caranguejos',
      texto:
        'Os caranguejos são alguns dos animais mais característicos dos manguezais. Eles ajudam na decomposição da matéria orgânica e na movimentação do solo, contribuindo para o equilíbrio do ecossistema.'
    },


    arvores: {
      icone: '🌳',
      titulo: 'Árvores do manguezal',
      texto:
        'As árvores dos manguezais possuem adaptações especiais que permitem sua sobrevivência em ambientes com água salgada e solo lodoso. Suas raízes também oferecem abrigo para diversas espécies.'
    },


    aves: {
      icone: '🐦',
      titulo: 'Aves',
      texto:
        'Os manguezais são importantes áreas de alimentação, reprodução e abrigo para diversas espécies de aves. Muitas delas dependem desse ambiente durante parte de seu ciclo de vida.'
    },


    pescador: {
      icone: '🚣',
      titulo: 'Comunidades tradicionais',
      texto:
        'Diversas comunidades tradicionais possuem uma relação histórica com os manguezais. A pesca, a coleta de caranguejos e outras atividades fazem parte da cultura e da economia dessas comunidades.'
    },


    peixes: {
      icone: '🐟',
      titulo: 'Peixes',
      texto:
        'Os manguezais funcionam como áreas de alimentação, reprodução e crescimento para diversas espécies de peixes. Por isso, são fundamentais para a manutenção da vida marinha e para a pesca.'
    },


    agua: {
      icone: '💧',
      titulo: 'Água',
      texto:
        'A água dos manguezais apresenta características próprias devido à influência das marés e à mistura entre água doce e salgada. Esse ambiente é essencial para inúmeras espécies.'
    },


    raizes: {
      icone: '🌱',
      titulo: 'Raízes do mangue',
      texto:
        'As raízes das árvores de mangue ajudam a estabilizar o solo, reduzir a erosão e criar ambientes onde pequenos animais podem se proteger e encontrar alimento.'
    },


    maré: {
      icone: '🌊',
      titulo: 'Marés',
      texto:
        'As marés fazem parte do funcionamento natural dos manguezais. O movimento da água influencia a distribuição de nutrientes, organismos e sedimentos dentro do ecossistema.'
    }

  };


  // ========================================
  // ABRIR INFORMAÇÃO
  // ========================================

  abrirInformacao(tipo: string): void {

    this.informacaoSelecionada =
      this.informacoesManguezal[tipo];

  }


  // ========================================
  // FECHAR INFORMAÇÃO
  // ========================================

  fecharInformacao(): void {

    this.informacaoSelecionada = null;

  }


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
  // CARREGAR VOZES
  // ========================================

  private carregarVozes(): void {

    const carregar = (): void => {

      this.vozesDisponiveis =
        window.speechSynthesis.getVoices();


      this.vozSelecionada =
        this.vozesDisponiveis.find(

          voz =>

            voz.lang.toLowerCase() === 'pt-br' &&

            (
              voz.name.toLowerCase().includes('female') ||
              voz.name.toLowerCase().includes('feminina') ||
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

        ??

        this.vozesDisponiveis.find(

          voz =>

            voz.lang.toLowerCase() === 'pt-br' &&

            (
              voz.name.toLowerCase().includes('microsoft') ||
              voz.name.toLowerCase().includes('google')
            )

        )

        ??

        this.vozesDisponiveis.find(

          voz =>
            voz.lang.toLowerCase() === 'pt-br'

        )

        ??

        null;

    };


    carregar();

    window.speechSynthesis.onvoiceschanged =
      carregar;

  }


  // ========================================
  // INICIAR LEITURA
  // ========================================

  lerTexto(texto: string): void {

    window.speechSynthesis.cancel();


    const fala =
      new SpeechSynthesisUtterance(texto);


    fala.lang = 'pt-BR';


    if (this.vozSelecionada) {

      fala.voice =
        this.vozSelecionada;

    }


    fala.rate = 0.88;

    fala.pitch = 1.05;

    fala.volume = 1;


    this.falaAtual = fala;


    fala.onstart = () => {

      this.audioFalando = true;

      this.audioPausado = false;

    };


    fala.onend = () => {

      this.audioFalando = false;

      this.audioPausado = false;

      this.falaAtual = null;

    };


    fala.onerror = () => {

      this.audioFalando = false;

      this.audioPausado = false;

      this.falaAtual = null;

    };


    window.speechSynthesis.speak(fala);

  }


  // ========================================
  // PAUSAR / CONTINUAR
  // ========================================

  pausarOuContinuar(): void {

    if (!this.audioFalando) {
      return;
    }


    if (
      window.speechSynthesis.paused
    ) {

      window.speechSynthesis.resume();

      this.audioPausado = false;

    }

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


    this.mostrarBotaoTopo =
      posicaoAtual > 400;


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