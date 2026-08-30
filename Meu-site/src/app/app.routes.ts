import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [

  // ========================================
  // LOGIN
  // ========================================

  {
    path: 'login',
    component: Login
  },


  // ========================================
  // HOME
  // ========================================

  {
    path: 'home',
    component: Home
  },


  // ========================================
  // VIDA NO MANGUEZAL
  // ========================================

  {
    path: 'vida-manguezal',

    loadComponent: () =>
      import('./shared/vida-manguezal/vida-manguezal')
        .then(m => m.VidaManguezal)
  },


  // ========================================
  // QUIZ
  // ========================================

  {
    path: 'quiz',

    loadComponent: () =>
      import('./quiz/quiz')
        .then(m => m.Quiz)
  },


  // ========================================
  // TEMAS
  // ========================================

  {
    path: 'tema/:slug',

    loadComponent: () =>
      import('./tema-detalhe/tema-detalhe')
        .then(m => m.TemaDetalhe)
  },


  // ========================================
  // ROTA INICIAL
  // ========================================

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  // ========================================
  // ROTA NÃO EXISTENTE
  // ========================================

  {
    path: '**',
    redirectTo: 'login'
  }

];