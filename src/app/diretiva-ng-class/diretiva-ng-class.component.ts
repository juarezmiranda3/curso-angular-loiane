import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ng-class.component.html',
  styleUrl: './diretiva-ng-class.component.scss'
})
export class DiretivaNgClassComponent {

  meuFavorito: boolean = false;

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}
