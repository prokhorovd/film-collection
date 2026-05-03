import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { MovieDetailsPage } from './pages/movie-details-page/movie-details-page';
import { UnknownRoutePage } from './pages/unknown-route-page/unknown-route-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Movie Catalog',
  },
  {
    path: 'films/:id',
    component: MovieDetailsPage,
    title: 'Movie Details',
  },
  {
    path: '**',
    component: UnknownRoutePage,
    title: '404',
  },
];
