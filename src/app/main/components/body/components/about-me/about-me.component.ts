import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @Input() user: User = new User();

  constructor() {}
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
