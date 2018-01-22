import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Film } from './models';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  films$: Observable<any[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.films$ = store.select(fromRoot.getAllFilms);
  }
}
