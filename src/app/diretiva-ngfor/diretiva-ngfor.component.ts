import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.scss'
})
export class DiretivaNgforComponent {

  cursos: string[] = ['Angular 2', 'Java', 'JavaScript']

}
