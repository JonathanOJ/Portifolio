import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';

@Component({
  selector: 'repositorys-info',
  templateUrl: './repositorys-info.component.html',
  styleUrls: ['./repositorys-info.component.scss'],
})
export class RepositorysInfoComponent implements OnChanges {
  @Input() repositorys: Repository[] = [];

  principlesRepositories: Repository[] = [];
  otherRepositories: Repository[] = [];

  constructor() {}

  ngOnChanges(): void {
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
      if (
        repository.name !== 'JonathanOJ' &&
        repository.name !== 'rafaballerini'
      ) {
        if (repository.name === 'Kenai') {
          repository.name === 'Kenai'
            ? (repository.image = '../../../../../../assets/Kenai.png')
            : '';
          principlesRepositories.push(repository);
        } else {
          otherRepositories.push(repository);
        }
      }
    });
    this.orderByDate(otherRepositories);
  }

  orderByDate(repositories: Repository[]): void {
    repositories.sort((a: Repository, b: Repository) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });
  }
}
