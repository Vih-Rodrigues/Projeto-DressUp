import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplatePoUiComponent } from './template-po-ui/template-po-ui.component';
import { AddItensComponent } from './add-itens/add-itens.component';
import { ClosetComponent } from './closet/closet.component';
import { LooksComponent } from './looks/looks.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }