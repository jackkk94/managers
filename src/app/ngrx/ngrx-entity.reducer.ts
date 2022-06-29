import { createReducer, createSelector, on } from '@ngrx/store';
import { EntityState } from '../models';
import { Add } from './ngrx-entity.actions';

export const initialState = {
  entities: [],
} as EntityState;


const _reducer = createReducer(
  initialState,
  on(Add, (state, action) => {
    console.log(21)
    return {
    entities: [...state.entities, action.payload]
  }})
);

export function EntitiesReducer(state, action) {
  return _reducer(state, action);
}