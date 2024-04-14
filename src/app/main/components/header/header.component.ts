import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class Language {
  value: string = '';
  label: string = '';
  icon: string = '';
  acronym: string = '';
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  languageSelected: Language = new Language();
  translteOptions = [
    {
      value: 'pt',
      label: 'Português',
      acronym: 'Pt-Br',
      icon: '../../../../assets/flags/brazil-flag.png',
    },
    {
      value: 'en',
      label: 'English',
      acronym: 'En-Us',
      icon: '../../../../assets/flags/eua-flag.png',
    },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.setOnInitLanguage();
  }

  setOnInitLanguage() {
    this.languageSelected.value = this.translate.getDefaultLang();

    switch (this.languageSelected.value) {
      case 'pt':
        this.languageSelected.label = 'Português';
        this.languageSelected.acronym = 'Pt-Br';
        this.languageSelected.icon = '../../../../assets/flags/brazil-flag.png';
        break;
      case 'en':
        this.languageSelected.label = 'English';
        this.languageSelected.acronym = 'En-Us';
        this.languageSelected.icon = '../../../../assets/flags/eua-flag.png';
        break;
      default:
        this.languageSelected.label = 'Português';
        this.languageSelected.acronym = 'Pt-Br';
        this.languageSelected.icon = '../../../../assets/flags/brazil-flag.png';
        break;
    }
  }

  switchLanguage(language: any) {
    this.translate.use(language.value);
    this.languageSelected = language;
    console.log(this.translate.currentLang);
  }

  scrollTo(where: string) {
    const element: HTMLElement | null = document.getElementById(where);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
