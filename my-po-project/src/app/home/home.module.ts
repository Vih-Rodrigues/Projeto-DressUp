import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AddItensComponent } from './add-itens/add-itens.component';
import { ClosetComponent } from './closet/closet.component';
import { LooksComponent } from './looks/looks.component';

@NgModule({
  declarations: [
    AddItensComponent,
    ClosetComponent,
    LooksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    AddItensComponent,
    ClosetComponent,
    LooksComponent
  ]
})
export class HomeModule { }