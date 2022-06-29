import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Entity, EntityState } from '../models';
import { Add } from './ngrx-entity.actions';

@Component({
  selector: 'app-entity',
  templateUrl: './ngrx.component.html'
})
export class NgrxComponent {
  entities$: Observable<Entity[]>;

  constructor(private store: Store<EntityState>) {
    this.entities$ = this.store.select((state: EntityState) => state.entities);
    this.entities$.subscribe(e=> console.log(e))
  }

  addEntity() {
    this.store.dispatch(Add({ payload: { id: 3 } as Entity }));
  }

}
