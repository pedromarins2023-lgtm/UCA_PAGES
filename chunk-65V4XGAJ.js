import{$ as s,A as r,G as c,M as u,N as p,R as l,S as a,T as t,U as g,X as h,_ as i,m,na as x,qa as b,y as d}from"./chunk-STZ2UFKK.js";function M(o,n){if(o&1&&(a(0,"a",2),i(1," \u2190 Voltar "),t(),a(2,"section",3)(3,"div",4),g(4,"img",5),t(),a(5,"div",6)(6,"h1"),i(7),t(),a(8,"p"),i(9),t()()()),o&2){let e=h();r(4),l("src",e.tema.imagem,d)("alt",e.tema.titulo),r(3),s(" ",e.tema.titulo," "),r(2),s(" ",e.tema.descricao," ")}}function C(o,n){o&1&&(a(0,"section",1)(1,"h1"),i(2," Tema n\xE3o encontrado "),t(),a(3,"a",2),i(4," Voltar para Home "),t()())}var f=class o{route=m(x);tema=null;temas={manguezal:{titulo:"O que \xE9 o Manguezal?",imagem:"https://guardioesdomar.org.br/wp-content/uploads/2024/03/mulher-projeto-uca-exibi-muda-replantio-manguezal-768x512.jpg",descricao:`
        O manguezal \xE9 um ecossistema costeiro muito importante,
        encontrado principalmente em regi\xF5es tropicais e subtropicais.

        Ele funciona como um ber\xE7\xE1rio natural para diversas esp\xE9cies
        de peixes, crust\xE1ceos e outros animais.

        Al\xE9m disso, os manguezais ajudam a proteger a costa,
        armazenam carbono e contribuem para o equil\xEDbrio ambiental.
      `},animais:{titulo:"Animais que vivem no Mangue",imagem:"https://guardioesdomar.org.br/wp-content/uploads/2024/02/galeria-projeto-uca-1.jpg",descricao:`
        Os manguezais abrigam uma grande diversidade de animais.

        Entre eles est\xE3o caranguejos, peixes, moluscos,
        aves e diversos outros organismos.

        Muitas esp\xE9cies utilizam o mangue como local para
        alimenta\xE7\xE3o, reprodu\xE7\xE3o e desenvolvimento.
      `},pescadores:{titulo:"Vida dos Pescadores no Mangue",imagem:"https://neomondo.org.br/w/wp-content/uploads/2020/03/projeto-uca-neomondo-sustentabilidade-cursos.jpg",descricao:`
        Para muitas comunidades tradicionais, o manguezal
        representa uma importante fonte de sustento.

        A pesca e a coleta de recursos naturais fazem parte
        da hist\xF3ria e da cultura de diversas comunidades
        que vivem pr\xF3ximas aos manguezais.

        Preservar o mangue tamb\xE9m significa preservar
        essas comunidades e seus modos de vida.
      `},preservacao:{titulo:"Por que preservar os Manguezais?",imagem:"https://guardioesdomar.org.br/wp-content/uploads/2024/02/galeria-projeto-uca-6.jpg",descricao:`
        Preservar os manguezais \xE9 fundamental para manter
        o equil\xEDbrio dos ecossistemas costeiros.

        Eles ajudam na prote\xE7\xE3o contra a eros\xE3o,
        servem de abrigo para diversas esp\xE9cies e
        contribuem para a qualidade da \xE1gua.

        A conserva\xE7\xE3o desses ambientes beneficia
        tanto a natureza quanto as comunidades.
      `},lixo:{titulo:"O lixo e os Manguezais",imagem:"https://i.pinimg.com/originals/a9/e9/0f/a9e90fe44569d5e6bb7e89817af6d0ad.jpg",descricao:`
        O descarte incorreto de res\xEDduos \xE9 uma das amea\xE7as
        aos manguezais.

        Pl\xE1sticos, embalagens e outros materiais podem
        contaminar a \xE1gua e prejudicar os animais.

        A redu\xE7\xE3o do lixo e o descarte correto dos res\xEDduos
        s\xE3o atitudes importantes para proteger esses ambientes.
      `},restauracao:{titulo:"Restaura\xE7\xE3o dos Manguezais",imagem:"https://guardioesdomar.org.br/wp-content/uploads/2024/03/mulher-projeto-uca-exibi-muda-replantio-manguezal-768x512.jpg",descricao:`
        A restaura\xE7\xE3o dos manguezais busca recuperar \xE1reas
        que sofreram algum tipo de degrada\xE7\xE3o.

        O replantio de mudas, a retirada de res\xEDduos e
        o envolvimento das comunidades s\xE3o algumas das
        a\xE7\xF5es que podem contribuir para essa recupera\xE7\xE3o.

        Restaurar o mangue \xE9 investir no futuro do meio ambiente.
      `}};constructor(){let n=this.route.snapshot.paramMap.get("slug");n&&(this.tema=this.temas[n])}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=c({type:o,selectors:[["app-tema-detalhe"]],decls:3,vars:1,consts:[[1,"tema-detalhe"],[1,"erro"],["routerLink","/home",1,"botao-voltar"],[1,"tema-card"],[1,"tema-imagem"],[3,"src","alt"],[1,"tema-conteudo"]],template:function(e,v){e&1&&(a(0,"main",0),u(1,M,10,4)(2,C,5,0,"section",1),t()),e&2&&(r(),p(v.tema?1:2))},dependencies:[b],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;font-family:Arial,Helvetica,sans-serif;background:#071117}.tema-detalhe[_ngcontent-%COMP%]{min-height:100vh;padding:120px 30px 80px;box-sizing:border-box}.botao-voltar[_ngcontent-%COMP%]{display:inline-block;margin-bottom:30px;padding:12px 22px;border-radius:30px;background:#3d798b;color:#fff;text-decoration:none;font-weight:700;transition:.3s}.botao-voltar[_ngcontent-%COMP%]:hover{background:#285466;transform:translate(-5px)}.tema-card[_ngcontent-%COMP%]{max-width:1100px;margin:0 auto;overflow:hidden;background:#fff;border-radius:25px;box-shadow:0 20px 60px #0006}.tema-imagem[_ngcontent-%COMP%]{width:100%;height:450px}.tema-imagem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.tema-conteudo[_ngcontent-%COMP%]{padding:45px}.tema-conteudo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;color:#327173;font-size:40px}.tema-conteudo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374848;font-size:17px;line-height:1.8;white-space:pre-line}.erro[_ngcontent-%COMP%]{text-align:center;padding-top:100px;color:#fff}@media(max-width:700px){.tema-detalhe[_ngcontent-%COMP%]{padding:100px 15px 50px}.tema-imagem[_ngcontent-%COMP%]{height:280px}.tema-conteudo[_ngcontent-%COMP%]{padding:30px 25px}.tema-conteudo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px}}"]})};export{f as TemaDetalhe};
