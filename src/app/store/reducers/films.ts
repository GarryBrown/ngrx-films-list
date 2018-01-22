import { Action } from '@ngrx/store';
import * as filmAction from '../actions/films';

import { Film } from '../../models/index';


export interface State {
  ids: number[],
  films: { [id: number]: Film },
  selectedFilm: number
}

export const initialState: State = {
  ids: [1],
  films: {
    1: { id: 1, name: 'Фильм', description: 'Описание' }
  },
  selectedFilm: null,
};

export function reducer(state = initialState, action: filmAction.Action) {
  switch (action.type) {
    case filmAction.ADD_ONE: {
      const newFilm: Film = action.payload;

      return {
        ...state,
        ids: [...state.ids, newFilm.id],
        films: { ...state.films, newFilm }
      };
    }


    case filmAction.SELECT: {
      const id = action.payload;
      const selected = state.films[id];
      return {
        ...state,
        selected
      };
    }


    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getFilms = (state: State) => state.films;
export const getSelected = (state: State) => state.selectedFilm;

