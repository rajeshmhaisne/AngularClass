import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent {
  title = "Angular Welcomes You..!";

  dummyArr = ["Pune", "Mumbai", "Nagpur"];

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
