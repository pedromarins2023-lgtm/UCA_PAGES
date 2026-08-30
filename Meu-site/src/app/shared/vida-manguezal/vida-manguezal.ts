import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Especie {
  nome: string;
  nomeCientifico: string;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-vida-manguezal',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './vida-manguezal.html',
  styleUrl: './vida-manguezal.css'
})
export class VidaManguezal {

  private router = inject(Router);

  // ========================================
  // CONTROLE DA ABA
  // ========================================

  abaAberta = false;

  especieSelecionada: Especie | null = null;


  // ========================================
  // ÁRVORES
  // ========================================

  arvores: Especie[] = [

    {
      nome: 'Mangue-vermelho',
      nomeCientifico: 'Rhizophora mangle',
      imagem: 'https://th.bing.com/th/id/R.75cd7445a2558457ce5c8561476e69d3?rik=7TaUNPR4Xn0%2b2g&pid=ImgRaw&r=0',
      descricao:
        'O mangue-vermelho é uma das espécies mais características dos manguezais. Possui raízes aéreas que ajudam na sustentação da árvore em áreas alagadas e também contribuem para a proteção do solo.'
    },

    {
      nome: 'Mangue-branco',
      nomeCientifico: 'Laguncularia racemosa',
      imagem: 'https://tse2.mm.bing.net/th/id/OIP.eMFdjd2QjetWJufNBoS4lAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      descricao:
        'O mangue-branco é encontrado em áreas de manguezal e possui estruturas especiais que ajudam a eliminar o excesso de sal absorvido pela planta.'
    },

    {
      nome: 'Mangue-preto',
      nomeCientifico: 'Avicennia schaueriana',
      imagem: 'https://tse2.mm.bing.net/th/id/OIP.PA4kbM3s6vTLibYFtAFTzwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      descricao:
        'O mangue-preto apresenta raízes que crescem verticalmente para fora do solo, chamadas pneumatóforos. Essas estruturas ajudam a planta a obter oxigênio em ambientes com pouco ar no solo.'
    },

    {
      nome: 'Mangue-de-botão',
      nomeCientifico: 'Conocarpus erectus',
      imagem: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/03/Cultivo-da-Conocarpus-Erectus.jpg',
      descricao:
        'O mangue-de-botão pode ocorrer associado aos ambientes costeiros e apresenta frutos arredondados que lembram pequenos botões.'
    },

    {
      nome: 'Mangue-vermelho-bravo',
      nomeCientifico: 'Rhizophora racemosa',
      imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI3w7izukARXvCd9FJbHtmfxCvGwvq__cQoaI6wcwhYqLvLehZQC9C7DNeVRX_eIdTT1D7IhyphenhyphenAb2Tm4tfpLuD7TuHjpWNo2hSbmlxpjalqCnqAjOh1k6YciUvb_NtVnTR016mFzM6hmPs/s1600/Mangue+vermelho+1+(Rhizophora%2Bmangle)%2Bcopy.jpg',
      descricao:
        'Essa espécie pertence ao gênero Rhizophora e possui adaptações importantes para sobreviver em ambientes costeiros sujeitos à influência das marés.'
    }

  ];


  // ========================================
  // ANIMAIS
  // ========================================

  animais: Especie[] = [

    {
      nome: 'Caranguejo-uçá',
      nomeCientifico: 'Ucides cordatus',
      imagem: 'https://tse2.mm.bing.net/th/id/OIP.Hle066pY7okVg1YJ6ki5nwHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      descricao:
        'O caranguejo-uçá é uma das espécies mais conhecidas dos manguezais brasileiros. Ele escava tocas no sedimento e possui grande importância para o equilíbrio do ecossistema.'
    },

    {
      nome: 'Guará',
      nomeCientifico: 'Eudocimus ruber',
      imagem: 'https://tse2.mm.bing.net/th/id/OIP.xiPH3snqGu4G7AsOCjOEZAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      descricao:
        'O guará é uma ave de coloração vermelha muito característica. Alimenta-se principalmente de pequenos animais encontrados em ambientes costeiros e manguezais.'
    },

    {
      nome: 'Garça-branca',
      nomeCientifico: 'Ardea alba',
      imagem: 'https://tse4.mm.bing.net/th/id/OIP.eX7kaza3YhygS5F0Gqx6qQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      descricao:
        'A garça-branca é uma ave comum em áreas próximas a rios, estuários e manguezais. Utiliza esses ambientes para encontrar peixes e outros pequenos animais.'
    },

    {
      nome: 'Siri-azul',
      nomeCientifico: 'Callinectes sapidus',
      imagem: 'https://www.ruraltectv.com.br/wp-content/uploads/2023/07/SIRI-AZUL-Callinectes-sapidus-2.2.jpg',
      descricao:
        'O siri-azul é um crustáceo encontrado em ambientes costeiros e estuarinos. Ele desempenha um papel importante nas cadeias alimentares desses ecossistemas.'
    },

    {
      nome: 'Peixe-boi-marinho',
      nomeCientifico: 'Trichechus manatus',
      imagem: 'https://tse2.mm.bing.net/th/id/OIP.MTgvvclAiQU6awXwg-XjHwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      descricao:
        'O peixe-boi-marinho é um mamífero aquático encontrado em regiões costeiras. É uma espécie importante para a conservação da biodiversidade brasileira.'
    }

  ];


  // ========================================
  // ABRIR ABA
  // ========================================

  abrirAba(): void {
    this.abaAberta = true;
  }


  // ========================================
  // FECHAR ABA
  // ========================================

  fecharAba(): void {

    this.abaAberta = false;

    this.especieSelecionada = null;

  }


  // ========================================
  // SELECIONAR ESPÉCIE
  // ========================================

  selecionarEspecie(especie: Especie): void {

    this.especieSelecionada = especie;

  }


  // ========================================
  // VOLTAR PARA ESPÉCIES
  // ========================================

  voltarParaEspecies(): void {

    this.especieSelecionada = null;

  }


  // ========================================
  // VOLTAR PARA HOME
  // ========================================

  voltarParaHome(): void {

    this.router.navigate(['/home']);

  }

}