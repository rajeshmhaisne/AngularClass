import { Component } from "@angular/core";

@Component({
  selector: "app-start",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Angular Welcomes You..!";

  dummyArr = ["Pune", "Mumbai", "Nagpur"];

  mobParts = [
    {
      name: "Mobile Screen",
      id: 1001,
      company: "OnePlus",
      imageURL: "./../assets/img/3.jpeg"
    },
    {
      name: "Mobile Screen 5",
      id: 1002,
      company: "Samsung",
      imageURL: "./../assets/img/1.jpeg"
    },
    {
      name: "Mobile Screen 5.5",
      id: 1003,
      company: "Nokia",
      imageURL: "./../assets/img/2.jpeg"
    }
  ];
}
