import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplatePoUiComponent } from './template-po-ui/template-po-ui.component';
import { AddItensComponent } from './add-itens/add-itens.component';
import { ClosetComponent } from './closet/closet.component';
import { LooksComponent } from './looks/looks.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { AddLookComponent } from './add-look/add-look.component';

const routes: Routes = [
  {
    path: 'template-po-ui',
    component: TemplatePoUiComponent
  },
  {
    path: 'add-itens',
    component: AddItensComponent
  },
  {
    path: 'closet',
    component: ClosetComponent
  },
  {
    path: 'looks',
    component: LooksComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'add-look',
    component: AddLookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }