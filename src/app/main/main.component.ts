import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}

  logger() {
    console.log(window.scrollY);
    console.log(document.documentElement.scrollTop);
  }
}
