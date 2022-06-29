import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    
  },
  {
    path: 'ngxs',
    loadChildren: () => import('./ngxs/ngxs-entity.module').then(m => m.NgXsModule)
  },
  {
    path: 'ngrx',
    loadChildren: () => import('./ngrx/ngrx-entity.module').then(m => m.NgRxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
