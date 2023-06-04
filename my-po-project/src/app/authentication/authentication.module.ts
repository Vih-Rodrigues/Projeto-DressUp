import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PoFieldModule } from '@po-ui/ng-components';

import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoButtonModule, PoContainerModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HelloComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    PoPageLoginModule,
    PoContainerModule,
    PoButtonModule,
    PoPageModule,
    PoDynamicModule,
    PoFieldModule,
    FormsModule
  ],
  exports: [
    HelloComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ]
})
export class AuthenticationModule { }