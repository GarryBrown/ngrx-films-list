import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import { Film } from '../../models';


@Component({
  selector: 'app-film-list',
  template: `
    <mat-list role="list">
      <mat-list-item  *ngFor="let film of films" role="listitem" (click)="select.emit(film.id)">
        <app-film-item  [film]="film"></app-film-item>
      </mat-list-item>
    </mat-list>


  `,
  styles: [`
  mat-list-item:hover {
    background-color: #ccc;
  }
  `]
})
export class FilmListComponent implements OnInit, OnChanges {
  @Input() films: Film[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

}
