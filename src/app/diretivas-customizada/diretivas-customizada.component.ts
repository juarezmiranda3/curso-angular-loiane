import { Component } from '@angular/core';
import { HighlightDirective } from '../shared/highlight.directive';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightCompletaDirective } from '../shared/highlight-completa.directive';
import { NgElseDirective } from '../shared/ng-else.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas-customizada',
  standalone: true,
  imports: [
    FundoAmareloDirective,
    HighlightDirective,
    HighlightCompletaDirective,
    NgElseDirective,
    CommonModule
  ],
  templateUrl: './diretivas-customizada.component.html',
  styleUrl: './diretivas-customizada.component.scss'
})
export class DiretivasCustomizadaComponent {

  cursos: string[] = ['Angular JS', 'Angular 2'];

  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
