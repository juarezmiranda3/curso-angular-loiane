import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

}
