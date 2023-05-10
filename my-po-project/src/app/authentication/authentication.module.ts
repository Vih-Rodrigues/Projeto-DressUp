import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoButtonModule, PoContainerModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    HelloComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    PoPageLoginModule,
    PoContainerModule,
    PoButtonModule
  ],
  exports: [
    HelloComponent,
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthenticationModule { }