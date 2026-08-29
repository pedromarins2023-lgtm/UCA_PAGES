import {
  Component,
  inject
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

@Component({
  selector: 'app-tema-detalhe',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './tema-detalhe.html',
  styleUrl: './tema-detalhe.css'
})
export class TemaDetalhe {

  private route = inject(ActivatedRoute);

  tema: any = null;


  // ========================================
  // TEMAS
  // ========================================

  temas = {

    manguezal: {

      titulo: 'O que é o Manguezal?',

      imagem:
        'https://guardioesdomar.org.br/wp-content/uploads/2024/03/mulher-projeto-uca-exibi-muda-replantio-manguezal-768x512.jpg',

      descricao: `
        O manguezal é um ecossistema costeiro muito importante,
        encontrado principalmente em regiões tropicais e subtropicais.

        Ele funciona como um berçário natural para diversas espécies
        de peixes, crustáceos e outros animais.

        Além disso, os manguezais ajudam a proteger a costa,
        armazenam carbono e contribuem para o equilíbrio ambiental.
      `
    },


    animais: {

      titulo: 'Animais que vivem no Mangue',

      imagem:
        'https://guardioesdomar.org.br/wp-content/uploads/2024/02/galeria-projeto-uca-1.jpg',

      descricao: `
        Os manguezais abrigam uma grande diversidade de animais.

        Entre eles estão caranguejos, peixes, moluscos,
        aves e diversos outros organismos.

        Muitas espécies utilizam o mangue como local para
        alimentação, reprodução e desenvolvimento.
      `
    },


    pescadores: {

      titulo: 'Vida dos Pescadores no Mangue',

      imagem:
        'https://neomondo.org.br/w/wp-content/uploads/2020/03/projeto-uca-neomondo-sustentabilidade-cursos.jpg',

      descricao: `
        Para muitas comunidades tradicionais, o manguezal
        representa uma importante fonte de sustento.

        A pesca e a coleta de recursos naturais fazem parte
        da história e da cultura de diversas comunidades
        que vivem próximas aos manguezais.

        Preservar o mangue também significa preservar
        essas comunidades e seus modos de vida.
      `
    },


    preservacao: {

      titulo: 'Por que preservar os Manguezais?',

      imagem:
        'https://guardioesdomar.org.br/wp-content/uploads/2024/02/galeria-projeto-uca-6.jpg',

      descricao: `
        Preservar os manguezais é fundamental para manter
        o equilíbrio dos ecossistemas costeiros.

        Eles ajudam na proteção contra a erosão,
        servem de abrigo para diversas espécies e
        contribuem para a qualidade da água.

        A conservação desses ambientes beneficia
        tanto a natureza quanto as comunidades.
      `
    },


    lixo: {

      titulo: 'O lixo e os Manguezais',

      imagem:
        'https://i.pinimg.com/originals/a9/e9/0f/a9e90fe44569d5e6bb7e89817af6d0ad.jpg',

      descricao: `
        O descarte incorreto de resíduos é uma das ameaças
        aos manguezais.

        Plásticos, embalagens e outros materiais podem
        contaminar a água e prejudicar os animais.

        A redução do lixo e o descarte correto dos resíduos
        são atitudes importantes para proteger esses ambientes.
      `
    },


    restauracao: {

      titulo: 'Restauração dos Manguezais',

      imagem:
        'https://guardioesdomar.org.br/wp-content/uploads/2024/03/mulher-projeto-uca-exibi-muda-replantio-manguezal-768x512.jpg',

      descricao: `
        A restauração dos manguezais busca recuperar áreas
        que sofreram algum tipo de degradação.

        O replantio de mudas, a retirada de resíduos e
        o envolvimento das comunidades são algumas das
        ações que podem contribuir para essa recuperação.

        Restaurar o mangue é investir no futuro do meio ambiente.
      `
    }

  };


  // ========================================
  // CARREGAR TEMA
  // ========================================

  constructor() {

    const slug =
      this.route.snapshot.paramMap.get('slug');

    if (slug) {

      this.tema =
        this.temas[
          slug as keyof typeof this.temas
        ];

    }

  }

}