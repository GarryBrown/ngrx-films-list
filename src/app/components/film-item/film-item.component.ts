import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../models';

@Component({
  selector: 'app-film-item',
  template: `
    <li>{{film.name}}</li>
  `,
  styles: []
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film
  constructor() { }

  ngOnInit() {
  }

}
