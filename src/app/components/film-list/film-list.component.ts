import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import { Film } from '../../models';


@Component({
  selector: 'app-film-list',
  template: `
    <div class="list">
      <h2>{{label}}</h2>
      <app-film-item  *ngFor="let film of films" [film]="film" (select)="select.emit($event)"></app-film-item>
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
  @Input() label: string;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

}
