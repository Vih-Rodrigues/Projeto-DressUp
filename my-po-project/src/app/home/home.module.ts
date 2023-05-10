import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TemplatePoUiComponent } from './template-po-ui/template-po-ui.component';
import { AddItensComponent } from './add-itens/add-itens.component';
import { ClosetComponent } from './closet/closet.component';
import { LooksComponent } from './looks/looks.component';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    TemplatePoUiComponent,
    AddItensComponent,
    ClosetComponent,
    LooksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PoModule,
    PoTemplatesModule
  ],
  exports: [
    TemplatePoUiComponent,
    AddItensComponent,
    ClosetComponent,
    LooksComponent
  ]
})
export class HomeModule { }