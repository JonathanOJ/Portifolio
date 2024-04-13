import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}

  scrollTo(where: string) {
    const element: HTMLElement | null = document.getElementById(where);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
