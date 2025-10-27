import { Routes } from '@angular/router';
import { HomeP } from './pages/home-p/home-p';
import { BricksP } from './pages/bricks-p/bricks-p';

export const routes: Routes = [
  {
    path: '',
    component: HomeP,
    title: 'Home Page'
  },
  {
    path: 'bricks',
    component: BricksP,
    title: 'Bricks'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
