import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  fields: any [] = [
    { property: 'Nome', required: true, showRequired: true },
    { property: 'Email', required: true, showRequired: true },
    { property: 'Senha', required: true, showRequired: true }
   ];

    varnome = this.fields[0]; 
    varemail = this.fields[1];
    varsenha = this.fields[2];

  constructor(private router: Router,
              private http: HttpClient) { }

  onClick(){    
    const url = 'http://127.0.0.1:5000/cadastrar';
    const data = { nome: this.varnome, email: this.varemail.property, senha: this.varsenha.property};
    this.http.post(url, data).subscribe(
      response => {
        console.log('Post successful', response);
      },
      error => {
        console.error('Error', error);
      }
    );
    this.router.navigate(['/template-po-ui'])
  }

}
