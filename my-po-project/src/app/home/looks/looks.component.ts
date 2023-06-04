import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

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
      link: '/hello'
    }
  ];

  private onClick() {
    alert('Certeza que deseja sair?')
  }

  public onClickAddLook() {
    window.location.href = "add-look"
  }

  // Criação de containers dinâmicos - quantidade a partir do número de
  // peças de roupa armazenadas na tabela do banco de dados
  ngAfterViewInit() {
    const containerNewItem = this.elementRef.nativeElement.querySelector('#container-new-look');
    const qtdContainers = 15; // Número utilizado para teste (oficialmente será retornado por pesquisa no banco de dados)

    for (let i = 1; i <= qtdContainers; i++) {
      const container = this.renderer.createElement('div');
      this.renderer.addClass(container, 'container');
      this.renderer.setStyle(container, 'border', '1px solid black');
      this.renderer.setStyle(container, 'backgroundColor', '#BA55D3');
      this.renderer.setStyle(container, 'display', 'inline-block');
      this.renderer.setStyle(container, 'width', '17%');
      this.renderer.setStyle(container, 'boxSizing', 'borderbox');
      this.renderer.setStyle(container, 'margin', '5px');
      
      const img = this.renderer.createElement('img');
      this.renderer.setAttribute(img, 'src', '../../../assets/images/Look-teste.png');
      this.renderer.setAttribute(img, 'wigth', '150');
      this.renderer.setAttribute(img, 'height', '150');

      this.renderer.appendChild(container, img);
      this.renderer.appendChild(containerNewItem, container);
    }
  }

  constructor(private route: Router, private renderer: Renderer2, private elementRef: ElementRef) { }

  Navegar(route: any) {
    console.log(route.link)
  }
}
