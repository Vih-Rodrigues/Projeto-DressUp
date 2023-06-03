import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';

import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // biblioteca para usar a função de inserir arquivo .png (add itens)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoPageLoginModule,
    PoContainerModule,
    HomeModule,
    AuthenticationModule,
    FormsModule,
    PoDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }