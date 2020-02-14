import { FirstDirective } from "./../../directives/first.directive";
import { MOBPARTS } from "./mock";
import { Component, OnInit } from "@angular/core";

import { MobParts } from "./mob-parts";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styles: [
    `
      .card {
        height: 500px !important;
      }
    `
  ]
})
export class MobPartsComponent {
  mobParts: MobParts[];

  constructor() {
    console.log("Constructor called");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngOnInit called");
    this.mobParts = MOBPARTS;
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges called");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
  }

  calcProd() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum += mobPart.inStock;
    }
    return sum;
  }
}
