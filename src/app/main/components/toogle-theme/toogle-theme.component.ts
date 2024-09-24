import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'toogle-theme',
  templateUrl: './toogle-theme.component.html',
  styleUrls: ['./toogle-theme.component.scss'],
})
export class ToogleThemeComponent implements OnInit {
  theme: string = 'dark';

  constructor(private cookies: CookieService) {}

  ngOnInit(): void {
    this.setTheme();
  }

  setTheme() {
    if (this.cookies.get('theme')) {
      // this.theme = this.cookies.get('theme');
      this.theme = 'dark';
      this.setAnimatedTheme(this.theme);
    } else {
      this.setAnimatedTheme(this.theme);
    }
  }

  changeTheme() {
    this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');
    this.cookies.set('theme', this.theme);
    this.setAnimatedTheme(this.theme);
  }

  setAnimatedTheme(theme: string) {
    const background = document.getElementsByClassName('background');
    if (theme === 'dark') {
      background[0].classList.add('dark');
      background[0].classList.remove('light');
      document.documentElement.style.setProperty('--bg-color', '#121212');
      document.documentElement.style.setProperty(
        '--bg-color-opacity',
        'rgba(18, 18, 18, 0.35)'
      );
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--primary-color', '#00d2df');
      document.documentElement.style.setProperty('--grey', '#c4c4c4');
      document.documentElement.style.setProperty(
        '--shadow',
        'rgba(247, 247, 247, 0.25)'
      );
    } else {
      background[0].classList.add('light');
      background[0].classList.remove('dark');
      document.documentElement.style.setProperty('--bg-color', '#F7F7F7');
      document.documentElement.style.setProperty(
        '--bg-color-opacity',
        'rgba(255, 255, 255, 0.35)'
      );
      document.documentElement.style.setProperty('--font-color', '#121212');
      document.documentElement.style.setProperty('--primary-color', '#00b0ff');
      document.documentElement.style.setProperty('--grey', '#888888');
      document.documentElement.style.setProperty(
        '--shadow',
        'rgba(18, 18, 18, 0.25)'
      );
    }
  }
}
