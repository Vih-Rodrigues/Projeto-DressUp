import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/hello', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => HomeModule)
  },
  {
    path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }