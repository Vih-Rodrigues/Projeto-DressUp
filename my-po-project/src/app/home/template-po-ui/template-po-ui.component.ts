import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-po-ui',
  templateUrl: './template-po-ui.component.html',
  styleUrls: ['./template-po-ui.component.css']
})
export class TemplatePoUiComponent {

  advice: string = "";

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
    alert('Já vai sair?')
  }

  constructor(private route: Router,
              private http: HttpClient) { }

  Navegar(route: any) {
    //console.log(route.link)
  }

  noClick() {
    const url = 'https://api.adviceslip.com/advice';

    this.http.get<any>(url).subscribe(
      (data) => {
        this.advice = data.slip.advice;
      },
      (error) => {
        console.error('Error fetching advice:', error);
      }
    );
  }

}
