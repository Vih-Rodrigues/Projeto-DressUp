import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  varNoBorder: boolean = true;
  emailDigitado?: string = "";
  senhaDigitada?: string = "";

  constructor(private router: Router,
              private http: HttpClient) { }

  onClick(){
    const url = 'http://127.0.0.1:5000/login';
    const data = { email: this.emailDigitado, senha: this.senhaDigitada };
    this.http.post(url, data).subscribe(
      response => {
        console.log('Usuário já cadastrado. Login autorizado.', response);
      },
      error => {
        console.error('Usuário não encontrado.', error);
      }
    );
    this.router.navigate(['/template-po-ui'])
  }
}
