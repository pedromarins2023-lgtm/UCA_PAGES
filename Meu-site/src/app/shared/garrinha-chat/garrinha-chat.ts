import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pergunta {
  pergunta: string;
  resposta: string;
}

@Component({
  selector: 'app-garrinha-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garrinha-chat.html',
  styleUrl: './garrinha-chat.css'
})
export class GarrinhaChat {

  aberto = false;

  respostaSelecionada = '';

  perguntas: Pergunta[] = [

    {
      pergunta: 'O que é o Projeto Uçá?',
      resposta:
        'O Projeto Uçá atua na conservação dos manguezais, na educação ambiental e na valorização das comunidades costeiras.'
    },

    {
      pergunta: 'O que vocês fazem?',
      resposta:
        'Realizamos ações de conservação, educação ambiental, pesquisa, restauração de manguezais e atividades com as comunidades.'
    },

    {
      pergunta: 'Por que os manguezais são importantes?',
      resposta:
        'Os manguezais são fundamentais para a biodiversidade, ajudam na proteção da costa e são importantes para diversas comunidades.'
    },

    {
      pergunta: 'Como posso ajudar?',
      resposta:
        'Você pode ajudar conhecendo o projeto, compartilhando informações, participando das ações e contribuindo para a preservação dos manguezais.'
    },

    {
      pergunta: 'Onde posso conhecer mais?',
      resposta:
        'Você pode navegar pelo nosso site para conhecer nossos projetos, ações, notícias e formas de contato.'
    }

  ];


  abrirChat(): void {
    this.aberto = true;
  }


  fecharChat(): void {
    this.aberto = false;
  }


  selecionarPergunta(pergunta: Pergunta): void {

    this.respostaSelecionada = pergunta.resposta;

  }


  voltarPerguntas(): void {

    this.respostaSelecionada = '';

  }

}