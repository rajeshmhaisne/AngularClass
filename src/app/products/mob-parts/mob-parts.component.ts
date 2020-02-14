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
  mobParts: MobParts[] = MOBPARTS;

  calcProd() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum += mobPart.inStock;
    }
    return sum;
  }
}
