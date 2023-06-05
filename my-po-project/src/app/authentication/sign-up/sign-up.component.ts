import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  nomeDigitado? : string = "";
  emailDigitado: string = "";
  senhaDigitada?: string = "";

  // Função que armazena o email no Local Storage do navegador
  armazenaDadosNoLocalStorage(): void {
    localStorage.setItem('emailUserLogado', this.emailDigitado);
  }

  constructor(private router: Router,
              private http: HttpClient) { }              

  onClick(){
    // Chamada da função para gravar os valores informados pelo usuário no Local Storage
    this.armazenaDadosNoLocalStorage();

    const url = 'http://127.0.0.1:5000/cadastrar';
    const data = { nome: this.nomeDigitado, email: this.emailDigitado, senha: this.senhaDigitada };
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
