import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleThemeComponent } from './toogle-theme.component';

describe('ToogleThemeComponent', () => {
  let component: ToogleThemeComponent;
  let fixture: ComponentFixture<ToogleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToogleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
