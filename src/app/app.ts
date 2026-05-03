import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumbs } from './layout/breadcrumbs/breadcrumbs';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Breadcrumbs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('film-collection');
}
