import { Language } from './language.model';

export class Repository {
  name: string = '';
  description: string = '';
  languages: string[] = [];
  repository_link: string = '';
  pushed_at: string = '';
  image: string = '';
  icons: Language[] = [];
}
