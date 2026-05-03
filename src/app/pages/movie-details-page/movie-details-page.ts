import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../../features/films/film.service';
import { DurationPipe } from '../../shared/pipes/duration-pipe';

@Component({
  selector: 'app-movie-details-page',
  imports: [DurationPipe, RouterLink],
  templateUrl: './movie-details-page.html',
  styleUrl: './movie-details-page.css',
})
export class MovieDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly filmService = inject(FilmService);

  private readonly movieId = Number(this.route.snapshot.paramMap.get('id'));

  readonly film = computed(() => this.filmService.getFilmById(this.movieId));
}
