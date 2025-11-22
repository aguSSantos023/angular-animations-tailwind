import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';
import { RouterItem } from './route-interface';

@Component({
  selector: 'app-navbar-c',
  imports: [RouterLink],
  templateUrl: './navbar-c.html',
  styleUrl: './navbar-c.css',
})
export class NavbarC {

  router = inject(Router)

  processedRoutes = routes.map(route => ({
    path: route.path ?? '',
    title: (route.title as string) ?? 'Page'
  })).filter(route => route.path !== '**' && route.path)


  routes = signal<RouterItem[]>(this.processedRoutes)
}
