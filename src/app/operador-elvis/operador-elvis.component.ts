import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-operador-elvis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss'
})
export class OperadorElvisComponent {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: null
    // responsavel: {nome: 'Juarez Miranda'}
  }
}
