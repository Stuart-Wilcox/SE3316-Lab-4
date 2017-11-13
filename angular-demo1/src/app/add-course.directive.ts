import { Directive , ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appAddCourse]',
  host: {
    '(submit)': 'onSubmit()'
  }
})
export class AddCourseDirective {
  _element:ElementRef;
  _renderer:Renderer;
  constructor(element:ElementRef, renderer: Renderer) {
    this._element = element;
    this._renderer = renderer;
  }

  onSubmit(){
    console.log("Hello");
  }

}
