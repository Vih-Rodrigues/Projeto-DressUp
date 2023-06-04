import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';

// ResponseData utilizado para informar à função pesquisaNoBancoNomeUsuarioLogado o uso do response para acessar o nome retornado pela pesquisa
interface ResponseData {
  nome: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Variável para guardar o email do usuário logado, recuperado pelo Local Storage
  varRecuperaEmailUsuarioLogado = localStorage.getItem('emailUserLogado');
  
  varRecuperaNomeUsuarioLogado: string = "";

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      shortLabel: "Home",
      icon: 'po-icon po-icon-home',
      action: this.Navegar.bind(this),
      link: '/template-po-ui'
    },
    {
      label: 'Perfil',
      shortLabel: "Perfil",
      icon: 'po-icon po-icon-user',
      action: this.Navegar.bind(this),
      link: '/profile'
    },
    {
      label: 'Closet',
      shortLabel: 'Closet',
      icon: 'po-icon po-icon-travel',
      action: this.Navegar.bind(this),
      link: '/closet'
    },
    {
      label: 'Add Itens',
      shortLabel: 'Add Itens',
      icon: 'po-icon po-icon-plus',
      action: this.Navegar.bind(this),
      link: '/add-itens'
    },
    {
      label: 'Looks',
      shortLabel: 'Looks',
      icon: 'po-icon po-icon-star',
      action: this.Navegar.bind(this),
      link: '/looks'
    },
    {
      label: 'Sobre',
      shortLabel: 'Sobre',
      icon: 'po-icon po-icon-exclamation',
      action: this.Navegar.bind(this),
      link: '/about-us'
    },
    {
      label: 'Sair',
      shortLabel: "Sair",
      icon: 'po-icon po-icon-exit',
      action: this.onClick.bind(this),
      link: '/hello'
    }
  ];

  private onClick() {
    alert('Certeza que deseja sair?')
  }

  constructor(private route: Router,
              private http: HttpClient) { }

  Navegar(route: any) {
    console.log(route.link)
  }

  // Função chamada assim que a página é carregada para mostrar o nome do usuário na tela
  ngOnInit(): void {
    this.pesquisaNoBancoNomeUsuarioLogado();
  }

  pesquisaNoBancoNomeUsuarioLogado(): void {
    const url = 'http://127.0.0.1:5000/selectNomeUsuarioLogado';
    const data = { email: this.varRecuperaEmailUsuarioLogado, nome: this.varRecuperaNomeUsuarioLogado };

    // ResponseData utilizado para que a variável varRecuperaNomeUsuarioLogado possa receber o *nome* de response
    this.http.post<ResponseData>(url, data).subscribe(
      response => {
        this.varRecuperaNomeUsuarioLogado = response.nome;
        console.log(this.varRecuperaNomeUsuarioLogado, response);
      },
      error => {
        console.error('Nome não encontrado.', error);
      }
    );
  }
}