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
  emailDigitado: string = "";
  senhaDigitada: string = "";
  emailInformado: boolean = false;

  // Função que armazena o email no Local Storage do navegador
  armazenaDadosNoLocalStorage(): void {
    localStorage.setItem('emailUserLogado', this.emailDigitado);
  }

  constructor(private router: Router,
              private http: HttpClient) { }

  // Função que verifica se o campo email foi preenchido, para habilitar o botão Esqueci minha senha
  verificaSeEmailFoiInformado(){
    this.emailInformado = !!this.emailDigitado;
  }

  onClick(){
    // Chamada da função para gravar os valores informados pelo usuário no Local Storage
    this.armazenaDadosNoLocalStorage();

    const url = 'http://127.0.0.1:5000/login';
    const data = { email: this.emailDigitado, senha: this.senhaDigitada };
    this.http.post(url, data).subscribe(
      response => {
        console.log('Usuário já cadastrado. Login autorizado.', response);
        this.router.navigate(['/template-po-ui'])
      },
      error => {
        console.error('Usuário não encontrado.', error);
      }
    );
  }

  esqueciMinhaSenha(){
    this.router.navigate(['/forgot-password'])
  }
}
