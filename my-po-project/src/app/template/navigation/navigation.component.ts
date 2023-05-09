import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    readonly menus: Array<PoMenuItem> = [
        { label: 'Home',
          shortLabel:"Home",
          icon:'po-icon po-icon-home',
          action: this.Navegar.bind(this),
          link: '/home'
        },
        { label: 'Perfil',
          shortLabel:"Perfil",
          icon:'po-icon po-icon-user',
          link: '/perfil'
        },
        { label: 'Peças',
          shortLabel:'Peças',
          icon:'po-icon po-icon-database',
          subItems:[
            {
              label:'Cadastro'
            }
          ]
        },
        { label: 'Sobre',  
          shortLabel:'Sobre',
          icon:'po-icon po-icon-handshake',
          link: '/sobre'
        },
        { label: 'Sair',    
          shortLabel:"Sair",
          icon:'po-icon po-icon-exit',
          action: this.onClick.bind(this),
          link:'/login'
        }
    ];
    
    private onClick() {
        alert('Certeza que deseja sair?')
    }
    
    constructor(private route: Router){}
    
    Navegar(route: any){
        console.log(route.link)
    }
}