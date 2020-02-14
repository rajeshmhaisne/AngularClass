import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: ".appFirst"
})
export class FirstDirective {
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.color = "red";
  }
}
