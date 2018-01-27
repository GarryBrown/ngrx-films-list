import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../models';

@Component({
  selector: 'app-film-selected',
  template: `
    <mat-card *ngIf="film && film.name">
      <mat-card-header>
        <mat-card-title>{{film.name}}</mat-card-title>
      </mat-card-header>
      <img mat-card-image src="{{film.img}}" alt="film image">
      <mat-card-content>
        <p>{{film.description}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
  mat-card {
    margin-top: 14px;
    width: 700px;
  }
  `]
})
export class FilmSelectedComponent implements OnInit {
  @Input() film: Film;
  constructor() { }

  ngOnInit() {
  }

}
