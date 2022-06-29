import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { addEntity } from './ngxs-entity.actions';


@State<string[]>({
  name: 'entities',
  defaults: []
})
@Injectable()
export class NgXsEntitiesState {
  @Action(addEntity)
  feedAnimals(ctx: StateContext<string[]>, { name }: addEntity) {
    ctx.setState((state) => ([...state, name]))
  }
}