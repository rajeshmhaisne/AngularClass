import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner2",
  template: `
    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            <h5 class="header col s12 light">
              RJM A modern responsive front-end framework based on Material
              Design
            </h5>
          </div>
        </div>
      </div>
      <div class="parallax">
        <img
          src="./..//assets/img/background2.jpg"
          alt="Unsplashed background img 2"
        />
      </div>
    </div>
  `,
  styles: []
})
export class Banner2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
