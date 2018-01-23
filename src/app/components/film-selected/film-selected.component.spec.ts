import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSelectedComponent } from './film-selected.component';

describe('FilmSelectedComponent', () => {
  let component: FilmSelectedComponent;
  let fixture: ComponentFixture<FilmSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
