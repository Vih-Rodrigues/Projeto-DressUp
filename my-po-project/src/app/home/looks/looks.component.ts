import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

// ----------
// Criação de containers dinâmicos - quantidade a partir do número de
// peças de roupa armazenadas na tabela do banco de dados
document.addEventListener('DOMContentLoaded', function () {
  const containerNewItem = document.getElementById('container-new-look');
  const qtdContainers = 15; // Número utilizado para teste (oficialmente será retornado por pesquisa no banco de dados)

  console.log(containerNewItem);

  for (let i = 1; i <= qtdContainers; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.border = '1px solid black';
    container.style.backgroundColor = '#BA55D3';
    container.style.display = 'inline-block';
    container.style.width = '17%';
    container.style.boxSizing = 'borderbox';
    container.style.margin = '5px';
    if (containerNewItem) {
      containerNewItem.appendChild(container);
      container.innerHTML = '<img src="../../../assets/images/Calca.png" width="100" height="100"> </img>'
                            + '<img src="../../../assets/images/BlusaMoletom.png" width="100" height="100"> </img>'
                            + '<img src="../../../assets/images/Tenis.png" width="100" height="100"> </img>'; // Oficialmente, o comando deverá inserir o container a imagem encontrada no banco de dados
    }
  }
});
// ----------

@Component({
  selector: 'app-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent {
  booleanAuxContainer = true;

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
      link: '/login'
    }
  ];

  private onClick() {
    alert('Certeza que deseja sair?')
  }

  public onClickAddLook() {
    window.location.href = "add-look.component.html"
  }

  constructor(private route: Router) { }

  Navegar(route: any) {
    console.log(route.link)
  }
}
