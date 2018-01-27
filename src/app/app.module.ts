import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmListComponent } from './components/film-list/film-list.component';

import { reducers, metaReducers } from './store/reducers';
import { FilmSelectedComponent } from './components/film-selected/film-selected.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    FilmItemComponent,
    FilmListComponent,
    FilmSelectedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
