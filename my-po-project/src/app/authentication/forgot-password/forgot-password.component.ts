import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  varNoBorder: boolean = true;
  novaSenhaDigitada: string = "";
  
  // Variável para guardar o email do usuário logado, recuperado pelo Local Storage
  varRecuperaEmailUsuarioLogado = localStorage.getItem('emailUserLogado');
  
  constructor(private router: Router,
              private http: HttpClient) { }

  onClick(){
    const url = 'http://127.0.0.1:5000/updateSenhaUsuario';
    const data = { email: this.varRecuperaEmailUsuarioLogado, nova_senha: this.novaSenhaDigitada };
    
    this.http.post(url, data).subscribe(
      response => {
        console.log('Senha alterada com sucesso!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Não foi possível alterar a senha. Tente novamente.', error);
      }
    )
  }

}