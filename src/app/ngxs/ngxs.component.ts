import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { addEntity } from './ngxs-entity.actions';
import { NgXsEntitiesState } from './ngxs-entity.state';

@Component({
  selector: 'app-entity',
  templateUrl: './ngxs.component.html'
})
export class NgXsComponent {
  @Select(NgXsEntitiesState) enities$: Observable<string[]>;

  constructor(private store: Store) { }

  addEntity(name: string) {
    this.store.dispatch(new addEntity(name));
  }
}
