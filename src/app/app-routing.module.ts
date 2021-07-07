import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PaginatorComponent } from './pages/paginator/paginator.component'
import { FinallyComponent } from './pages/finally/finally.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'surpresa',
    component: PaginatorComponent
  },
  {
    path: 'finalmente',
    component: FinallyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
