import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  showSectionsAboutMe: boolean = false;
  constructor() {}

  myFunction() {
    console.log('hola');
  }
  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      console.log(window.scrollY);
      this.showSectionsAboutMe = window.scrollY > 100;
    });
    window.onscroll = () => {
      this.myFunction();
    };
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    console.log(window.scrollY);
    this.showSectionsAboutMe = window.scrollY > 100;
  }

  redirect(site: String) {
    if (site === 'github') {
      window.open('https://github.com/JonathanOJ', '_blank');
    } else if (site === 'linkedin') {
      window.open(
        'https://www.linkedin.com/in/jonathan-oleniki-jacobovski-9ba2b8ba/',
        '_blank'
      );
    }
  }

  downloadPDF() {
    window.open(
      '../../../../assets/Curriculum Jonathan O. Jacobovski.pdf',
      '_blank'
    );
  }

  emailTo() {
    window.open('mailto:jonathan_jacobovski@hotmail.com', '_blank');
  }
}
