import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Film } from '../../models';

@Component({
  selector: 'app-film-item',
  template: `
    <li (click)="select.emit(film.id)">{{film.name}}</li>
  `,
  styles: []
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
