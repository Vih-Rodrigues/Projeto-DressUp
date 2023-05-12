import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

// Variáveis temporárias para teste dos campos da página Perfil
const userName = "Fulano de Tal";
const email = "fulanodetal@gmail.com";

// Referência dos widget's através da função getElementById
const widgetUsername = document.getElementById("widget-username");
const widgetEmail = document.getElementById("widget-email");

// Altera o conteúdo dos widget's
if (widgetUsername) {
  widgetUsername.textContent = userName;
}
if (widgetEmail) {
  widgetEmail.textContent = email;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
      link: '/login'
    }
  ];

  private onClick() {
    alert('Certeza que deseja sair?')
  }

  constructor(private route: Router) { }

  Navegar(route: any) {
    console.log(route.link)
  }
}