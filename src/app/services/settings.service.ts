import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector(' #theme ');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/purple-dark.css';
    this.linkTheme?.setAttribute('href', url);

    console.log('servidor arriba');
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const link = document.querySelectorAll('.selector');
    link.forEach((elemt) => {
      elemt.classList.remove('working');
      const btnTheme = elemt.getAttribute('data-theme');
      const btnthemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnthemeUrl === currentTheme) {
        elemt.classList.add('working');
      }
    });
    console.log(link);
  }
}
