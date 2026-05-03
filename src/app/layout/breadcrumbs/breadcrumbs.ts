import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { FilmService } from '../../features/films/film.service';

type Breadcrumb = {
  label: string;
  url?: string;
};

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);

  readonly breadcrumbs = computed<Breadcrumb[]>(() => {
    this.router.lastSuccessfulNavigation();

    const [, segment, id] = this.router.url.split('/');

    if (!segment) {
      return [{ label: 'Home' }];
    }

    if (segment === 'films' && id) {
      const film = this.filmService.getFilmById(Number(id));

      return [{ label: 'Home', url: '/' }, { label: film?.title ?? 'Film not found' }];
    }

    return [{ label: 'Home', url: '/' }, { label: '404' }];
  });
}
