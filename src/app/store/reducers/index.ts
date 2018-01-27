import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromFilms from './films';

export interface State {
    films: fromFilms.State;
}

export const reducers: ActionReducerMap<State> = {
    films: fromFilms.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getFilmState = createFeatureSelector<fromFilms.State>('films');

export const getIds = createSelector(
    getFilmState,
    fromFilms.getIds,
);

export const getFilms = createSelector(
    getFilmState,
    fromFilms.getFilms,
);

export const getSelected = createSelector(
    getFilmState,
    fromFilms.getSelected,
);

export const getSelectedFilm = createSelector(
    getSelected,
    getFilms,
    (selectedId, films) => {
        return {
            ...films[selectedId]
        };
    }
);

export const getAllFilms = createSelector(
    getIds,
    getFilms,
    (ids, films) => {
        return ids.map(id => films[id]);
    }
);
