import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
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
    this.getIcon(principlesRepositories);
    this.getIcon(otherRepositories);
    this.orderByDate(otherRepositories);
  }

  getIcon(repositoryList: Array<Repository>) {
    repositoryList.forEach((repository) => {
      repository.languages.forEach((language) => {
        let icon = this.getIconProperties(language);
        repository.icons.push({ ...icon });
      });
    });
  }

  getIconProperties(language: string): Language {
    let icon: Language = new Language();
    switch (language) {
      case 'typescript':
        icon.name = 'TypeScript';
        icon.icon = 'language-typescript';
        icon.color = '#007ACC';
        return icon;
      case 'javascript':
        icon.name = 'JavaScript';
        icon.icon = 'language-javascript';
        icon.color = '#F7DF1E';
        return icon;
      case 'css':
        icon.name = 'CSS';
        icon.icon = 'language-css3';
        icon.color = '#264DE4';
        return icon;
      case 'html':
        icon.name = 'HTML';
        icon.icon = 'language-html5';
        icon.color = '#E34F26';
        return icon;
      case 'angular':
        icon.name = 'Angular';
        icon.icon = 'angular';
        icon.color = '#DD0031';
        return icon;
      case 'java':
        icon.name = 'Java';
        icon.icon = 'language-java';
        icon.color = '#B07219';
        return icon;
      case 'python':
        icon.name = 'Python';
        icon.icon = 'language-python';
        icon.color = '#3572A5';
        return icon;
      case 'c':
        icon.name = 'C';
        icon.icon = 'language-c';
        icon.color = '555555';
        return icon;
      default:
        return icon;
    }
  }

  orderByDate(repositories: Repository[]): void {
    repositories.sort((a: Repository, b: Repository) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });
  }
}
