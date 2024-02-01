import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[HighlightCompleta]',
  standalone: true
})
export class HighlightCompletaDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highligthColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'white';

  @Input('HighlightCompleta') highligthColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
