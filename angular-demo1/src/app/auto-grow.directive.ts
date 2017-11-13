import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {
  _element : ElementRef;
  _renderer: Renderer;

  constructor(element : ElementRef, renderer : Renderer) {
    this._element = element;
    this._renderer = renderer;
  }

  onFocus(){
    this._renderer.setElementStyle(this._element.nativeElement, 'width', '200px');
  }

  onBlur(){
    this._renderer.setElementStyle(this._element.nativeElement, 'width', '120px');
  }

}
