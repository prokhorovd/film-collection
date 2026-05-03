import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(movieLength: number): string {
    const hours = Math.floor(movieLength / 60);
    const minutes = movieLength % 60;

    if (hours > 0 && minutes === 0) {
      return `${hours}h`;
    }

    if (hours === 0) {
      return `${minutes}min`;
    }

    return `${hours}h ${minutes}min`;
  }
}
