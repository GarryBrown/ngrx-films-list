import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Film } from '../../models';


@Component({
  selector: 'app-film-list',
  template: `
    <div class="list">
      <app-film-item  *ngFor="let film of films" [film]="film"></app-film-item>
    </div>
  `,
  styles: [`
  .list {
    display:flex;
    flex-direction:column;
  }
  `]
})
export class FilmListComponent implements OnInit, OnChanges {
  @Input() films: Film[];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    debugger;
  }

}
