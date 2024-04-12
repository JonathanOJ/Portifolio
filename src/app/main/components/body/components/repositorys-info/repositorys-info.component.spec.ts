import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorysInfoComponent } from './repositorys-info.component';

describe('RepositorysInfoComponent', () => {
  let component: RepositorysInfoComponent;
  let fixture: ComponentFixture<RepositorysInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositorysInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositorysInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
