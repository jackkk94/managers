import { createAction, props } from '@ngrx/store';
import { Entity } from '../models';

export const Add = createAction('[Entity] Add', props<{ payload: Entity }>());