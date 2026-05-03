import { Component, input, output } from '@angular/core';
import { Film } from '../../film.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  readonly film = input.required<Film>();
  readonly duration = input.required<string>();

  readonly favoriteToggle = output<number>();

  onToggleFavorite(): void {
    this.favoriteToggle.emit(this.film().id);
  }
}
