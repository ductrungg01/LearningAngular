import { Directive, ElementRef, Input } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'blue';

  constructor(private el : ElementRef) {
   
  }

  ngOnInit():void{
    this.el.nativeElement.style.color = this.appHighLight;
  }

}
