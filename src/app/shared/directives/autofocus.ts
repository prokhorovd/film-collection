import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus {
  private searchFieldRef = inject(ElementRef<HTMLInputElement>);
  // set focus on the search field after the view is initialized
  ngAfterViewInit(): void {
    this.searchFieldRef.nativeElement.focus();
  }
}
