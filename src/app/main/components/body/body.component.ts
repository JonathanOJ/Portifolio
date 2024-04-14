import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from 'src/app/models/repository.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  showSectionsAboutMe: boolean = false;
  user: User = new User();
  repositorys: Repository[] = [];

  getUserSub: Subscription = new Subscription();
  getRepositorysSub: Subscription = new Subscription();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
    this.getRepositorys();
  }

  ngOnDestroy(): void {
    this.getUserSub ? this.getUserSub.unsubscribe() : null;
    this.getRepositorysSub ? this.getRepositorysSub.unsubscribe() : null;
  }

  getUser() {
    this.getUserSub = this.httpClient
      .get('https://api.github.com/users/JonathanOJ')
      .subscribe({
        next: (data: any) => {
          this.handleInfoUser(data);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  handleInfoUser(githubInfo: any) {
    githubInfo.name ? (this.user.name = githubInfo.name) : null;
    githubInfo.avatar_url ? (this.user.image = githubInfo.avatar_url) : null;
    githubInfo.html_url ? (this.user.githubLink = githubInfo.html_url) : null;
  }

  getRepositorys() {
    this.getRepositorysSub = this.httpClient
      .get('https://api.github.com/users/JonathanOJ/repos')
      .subscribe({
        next: (data: any) => {
          this.repositorys = data.map((repository: any) => {
            let repo = new Repository();
            repo.name = repository.name;
            repo.description = repository.description;
            repo.languages = repository.topics;
            repo.repository_link = repository.html_url;
            repo.pushed_at = this.getDateFormat(repository.pushed_at);
            return repo;
          });
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  getDateFormat(date: string): string {
    const dateFormated = new Date(date);
    return `${dateFormated.getDate()}/${
      dateFormated.getMonth() + 1
    }/${dateFormated.getFullYear()}`;
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
}
