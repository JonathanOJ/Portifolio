import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';

@Component({
  selector: 'repositorys-info',
  templateUrl: './repositorys-info.component.html',
  styleUrls: ['./repositorys-info.component.scss'],
})
export class RepositorysInfoComponent implements OnInit {
  @Input() repositorys: Repository[] = [];

  principlesRepositories: Repository[] = [];
  otherRepositories: Repository[] = [];

  constructor() {}

  ngOnInit(): void {
    this.handleRepositories(
      this.repositorys,
      this.principlesRepositories,
      this.otherRepositories
    );
  }

  handleRepositories(
    repositorys: Repository[],
    principlesRepositories: Repository[],
    otherRepositories: Repository[]
  ): void {
    repositorys.forEach((repository: Repository) => {
      if (repository.name === 'Kenai' || repository.name === 'LogMine') {
        principlesRepositories.push(repository);
      } else {
        otherRepositories.push(repository);
      }
    });
  }
}
