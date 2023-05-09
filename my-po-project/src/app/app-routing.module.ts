import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/app-home', pathMatch: 'full'
  },
  {
    path: 'app-home', loadChildren: () => import('./home/home.module').then(m => HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }