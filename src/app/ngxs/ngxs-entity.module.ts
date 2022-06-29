import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { NgXsComponent } from './ngxs.component';
import { NgXsEntitiesState } from './ngxs-entity.state';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NgXsComponent
    }]),
    NgxsModule.forFeature([NgXsEntitiesState]),

    
  ],
  declarations: [NgXsComponent]
})
export class NgXsModule { }