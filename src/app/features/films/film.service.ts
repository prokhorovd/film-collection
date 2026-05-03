import { computed, Injectable, signal } from '@angular/core';
import { Film } from './film.interface';
import { FILMS } from './films.mock';

// Registered globally (singleton)
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  // Stores the film collection in a signal
  private readonly films = signal<Film[]>(FILMS);

  // Provides access to all films
  readonly allFilms = this.films.asReadonly();

  // Provides a computed list of favorite films
  readonly favoriteFilms = computed(() => this.films().filter((film) => film.isFavorite));

  // Allows getting a film by id
  getFilmById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }

  // Allows toggling a film's favorite status
  toggleFavorite(id: number): void {
    this.films.update((films) =>
      films.map((film) => (film.id === id ? { ...film, isFavorite: !film.isFavorite } : film)),
    );
  }
}
