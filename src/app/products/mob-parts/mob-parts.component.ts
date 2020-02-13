import { Component, OnInit } from "@angular/core";

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
  mobParts = [
    {
      name: "Mobile Screen",
      id: 1001,
      company: "OnePlus",
      imageURL: "./../assets/img/3.jpeg",
      inStock: 350,
      prodColor: "Red",
      isOnline: true,
      Country: "India"
    },
    {
      name: "Mobile Screen 5",
      id: 1002,
      company: "Samsung",
      imageURL: "./../assets/img/1.jpeg",
      inStock: 250,
      prodColor: "Green",
      isOnline: true,
      Country: "Australia"
    },
    {
      name: "Mobile Screen 5.5",
      id: 1003,
      company: "Nokia",
      imageURL: "./../assets/img/2.jpeg",
      inStock: 0,
      prodColor: "Blue",
      isOnline: false,
      Country: "USA"
    }
  ];
}
