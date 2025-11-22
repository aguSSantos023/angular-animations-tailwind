import { Routes } from '@angular/router';
import { HomeP } from './pages/home-p/home-p';
import { BricksP } from './pages/bricks-p/bricks-p';
import { ArrowsP } from './pages/arrows-p/arrows-p';
import { ComponentsP } from './pages/components-p/components-p';

export const routes: Routes = [
  {
    path: '',
    component: HomeP,
    title: 'Home Page'
  },
  {
    path: 'components',
    component: ComponentsP,
    title: 'Componentes'
  },
  {
    path: 'bricks',
    component: BricksP,
    title: 'Bricks'
  },
  {
    path: 'arrows',
    component: ArrowsP,
    title: 'Arrows'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
