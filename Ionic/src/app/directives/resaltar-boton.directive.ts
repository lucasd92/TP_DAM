import { Directive, ElementRef, HostListener } from '@angular/core';
import { IonButton } from '@ionic/angular';

@Directive({
  selector: '[appResaltarBoton]'
})
export class ResaltarBotonDirective {

  constructor(private el:IonButton) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.resaltar( 'success');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color: string): void {
      this.el.color = color;
  }
}
