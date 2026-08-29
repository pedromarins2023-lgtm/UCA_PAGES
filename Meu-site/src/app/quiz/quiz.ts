import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Pergunta {
  pergunta: string;
  alternativas: string[];
  correta: number;
}

@Component({
  selector: 'app-quiz',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {

  // ========================================
  // CONTROLE DO QUIZ
  // ========================================

  quizIniciado = false;

  quizFinalizado = false;

  perguntaAtual = 0;

  pontuacao = 0;

  respostaSelecionada: number | null = null;

  respostaRespondida = false;


  // ========================================
  // PERGUNTAS
  // ========================================

  perguntas: Pergunta[] = [

    {
      pergunta:
        'Em que ano a organização Guardiões do Mar foi oficialmente criada?',

      alternativas: [
        '1995',
        '1998',
        '2002',
        '2012'
      ],

      correta: 1
    },


    {
      pergunta:
        'Qual região é destacada como um território de atuação da Guardiões do Mar?',

      alternativas: [
        'Baía de Guanabara',
        'Pantanal Mato-Grossense',
        'Serra da Mantiqueira',
        'Vale do São Francisco'
      ],

      correta: 0
    },


    {
      pergunta:
        'Qual destes temas faz parte das ações da Guardiões do Mar?',

      alternativas: [
        'Conservação e restauração de manguezais',
        'Expansão de áreas industriais',
        'Exploração mineral costeira',
        'Construção de grandes rodovias'
      ],

      correta: 0
    },


    {
      pergunta:
        'Qual problema relacionado ao ambiente costeiro está entre as preocupações da organização?',

      alternativas: [
        'Lixo costeiro e marinho',
        'Falta de estacionamentos',
        'Expansão de centros comerciais',
        'Transporte ferroviário urbano'
      ],

      correta: 0
    },


    {
      pergunta:
        'Além da conservação ambiental, qual aspecto social é destacado na atuação da organização?',

      alternativas: [
        'Fortalecimento de povos tradicionais',
        'Expansão de grandes redes varejistas',
        'Construção de condomínios costeiros',
        'Expansão de atividades industriais'
      ],

      correta: 0
    },


    {
      pergunta:
        'Que tipo de iniciativa a organização ajudou a institucionalizar e incubar?',

      alternativas: [
        'Cooperativas',
        'Clubes esportivos profissionais',
        'Empresas de mineração',
        'Grandes redes hoteleiras'
      ],

      correta: 0
    },


    {
      pergunta:
        'Qual atividade está relacionada às cooperativas apoiadas pela organização?',

      alternativas: [
        'Reciclagem',
        'Extração de petróleo',
        'Mineração de metais',
        'Construção naval industrial'
      ],

      correta: 0
    },


    {
      pergunta:
        'Qual grupo é citado como parte das ações de fortalecimento do protagonismo?',

      alternativas: [
        'Jovens e comunidades',
        'Grandes corporações internacionais',
        'Equipes esportivas profissionais',
        'Empresas de mineração'
      ],

      correta: 0
    },


    {
      pergunta:
        'Entre 2021 e 2025, quantos projetos são mencionados como parte das novas iniciativas?',

      alternativas: [
        '6 projetos',
        '8 projetos',
        '10 projetos',
        '15 projetos'
      ],

      correta: 2
    },


    {
      pergunta:
        'Qual é uma das finalidades da restauração dos manguezais?',

      alternativas: [
        'Recuperar áreas degradadas',
        'Substituir manguezais por áreas urbanas',
        'Aumentar o descarte de resíduos',
        'Reduzir a biodiversidade local'
      ],

      correta: 0
    }

  ];


  // ========================================
  // PERGUNTA ATUAL
  // ========================================

  get pergunta() {

    return this.perguntas[
      this.perguntaAtual
    ];

  }


  // ========================================
  // PORCENTAGEM DA BARRA
  // ========================================

  get progresso() {

    return (
      ((this.perguntaAtual + 1) /
      this.perguntas.length) * 100
    );

  }


  // ========================================
  // INICIAR QUIZ
  // ========================================

  iniciarQuiz() {

    this.quizIniciado = true;

    this.quizFinalizado = false;

    this.perguntaAtual = 0;

    this.pontuacao = 0;

    this.respostaSelecionada = null;

    this.respostaRespondida = false;

  }


  // ========================================
  // SELECIONAR RESPOSTA
  // ========================================

  selecionarResposta(indice: number) {

    if (this.respostaRespondida) {

      return;

    }

    this.respostaSelecionada = indice;

    this.respostaRespondida = true;


    // ========================================
    // VERIFICAR RESPOSTA
    // ========================================

    if (
      indice ===
      this.pergunta.correta
    ) {

      this.pontuacao++;

    }

  }


  // ========================================
  // PRÓXIMA PERGUNTA
  // ========================================

  proximaPergunta() {

    if (!this.respostaRespondida) {

      return;

    }


    if (
      this.perguntaAtual <
      this.perguntas.length - 1
    ) {

      this.perguntaAtual++;

      this.respostaSelecionada = null;

      this.respostaRespondida = false;

    }

    else {

      this.quizFinalizado = true;

    }

  }


  // ========================================
  // REINICIAR
  // ========================================

  reiniciarQuiz() {

    this.quizIniciado = false;

    this.quizFinalizado = false;

    this.perguntaAtual = 0;

    this.pontuacao = 0;

    this.respostaSelecionada = null;

    this.respostaRespondida = false;

  }


  // ========================================
  // PORCENTAGEM FINAL
  // ========================================

  get porcentagemFinal() {

    return Math.round(
      (
        this.pontuacao /
        this.perguntas.length
      ) * 100
    );

  }


  // ========================================
  // MENSAGEM FINAL
  // ========================================

  get mensagemFinal() {

    if (this.pontuacao >= 9) {

      return 'Excelente! Você conhece muito bem a importância dos manguezais e o trabalho da organização.';

    }

    if (this.pontuacao >= 7) {

      return 'Muito bom! Você demonstrou um ótimo conhecimento sobre o tema.';

    }

    if (this.pontuacao >= 5) {

      return 'Bom trabalho! Você já conhece bastante, mas ainda pode aprender mais.';

    }

    return 'Continue aprendendo! Conhecer o meio ambiente é o primeiro passo para ajudar a preservá-lo.';

  }

}