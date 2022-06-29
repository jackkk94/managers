import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx.component';
import { EntitiesReducer } from './ngrx-entity.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NgrxComponent
    }]),
    StoreModule.forFeature('EntetiesState', EntitiesReducer)
  ],
  declarations: [NgrxComponent]
})
export class NgRxModule { }