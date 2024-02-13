import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
@Input() hover:string = '';
@Input() bold:string = '';
  constructor(private element:ElementRef) { }
  @HostListener('mouseenter')hoverEnter(){
    this.element.nativeElement.style.textDecoration=this.hover;
    this.element.nativeElement.style.fontWeight=this.bold;
  }
  @HostListener('mouseleave')hoverLeave(){
    this.element.nativeElement.style.textDecoration='none';
    this.element.nativeElement.style.fontWeight='normal';
  }

}
