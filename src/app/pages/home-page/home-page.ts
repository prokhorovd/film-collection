import { Component, inject } from '@angular/core';
import { FilmCard } from '../../features/films/components/film-card/film-card';
import { FilmService } from '../../features/films/film.service';

@Component({
  selector: 'app-home-page',
  imports: [FilmCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private readonly filmService = inject(FilmService);

  readonly films = this.filmService.allFilms;

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
