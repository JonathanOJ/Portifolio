import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/header/header.component';
import { BodyComponent } from './main/components/body/body.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { ToogleThemeComponent } from './main/components/toogle-theme/toogle-theme.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from './main/components/body/components/about-me/about-me.component';
import { ExperienceInfoComponent } from './main/components/body/components/experience-info/experience-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RepositorysInfoComponent } from './main/components/body/components/repositorys-info/repositorys-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  console.log('translate loader running..');

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ToogleThemeComponent,
    AboutMeComponent,
    ExperienceInfoComponent,
    RepositorysInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
