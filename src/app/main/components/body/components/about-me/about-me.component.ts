import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @Input() user: User = new User();
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.handleWindowSize();
  }
  downloadPDF() {
    window.open('./../../../assets/Jonathan CV.pdf', '_blank');
  }

  emailTo() {
    window.open('mailto:jonathan_jacobovski@hotmail.com', '_blank');
  }

  handleWindowSize() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
