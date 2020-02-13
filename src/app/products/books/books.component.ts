import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styles: [
    `
      .card {
        height: 600px !important;
      }
    `
  ]
})
export class BooksComponent {
  bookDetails = [
    {
      bookName: "Angular 9 rc",
      bookAuthor: "Suraj Jaigude",
      bookDesc:
        "Hello guys, if you are interested in learning the Angular framework, one of the most popular JavaScript frameworks for developing component-based Web GUI and looking for some awesome resources like courses, tutorials, and books, then you have come to the right place.",
      urlToBuy:
        "https://www.amazon.in/Angular-Interview-Questions-Answers-ebook/dp/B07SNW1HLX/ref=sr_1_3?crid=3L1T49LQ6JOF0&keywords=angular+8+books&qid=1581563956&sprefix=angular%2Caps%2C649&sr=8-3",
      bookImage: "./../assets/img/BookAngular.jpg",
      price: 1200
    },
    {
      bookName: "JavaScripts",
      bookAuthor: "Santosh Dhokne",
      bookDesc:
        "HTML5 Black Book is the one-time reference book, written from the Web professional’s point of view, containing hundreds of examples and covering nearly every aspect of HTML5. It will help you to master various Web technologies, other than HTML5, including CSS3, JavaScript, XML and AJAX. If you are a Web designer or developer, then this book is your introduction to new features and elements of HTML5, including audio and video media elements, the canvas element for drawing, and many others.",
      urlToBuy:
        "https://www.amazon.in/JavaScript-HTML5-Now-Kyle-Simpson-ebook/dp/B0084HJE0S/ref=sr_1_2?crid=10508HIKP2NJJ&keywords=javascript+book&qid=1581563982&sprefix=javascript%2Caps%2C326&sr=8-2",
      bookImage: "./../assets/img/BookJavascript.jpg",
      price: 1200
    },
    {
      bookName: "CSS",
      bookAuthor: "Sandip Binnar",
      bookDesc:
        "This book covers HTML5, CSS3 and jQuery In just one hour a day, you’ll learn the skills you need to design, create and maintain a professional- looking website Thoroughly revised and updated with examples rewritten to conform to HTML5, CSS3 and contemporary web development practices, this easy - to - understand, step - by - step tutorial helps you quickly master the basics of HTML and CSS before moving on to more advanced topics such as",
      urlToBuy:
        "https://www.amazon.in/Mastering-HTML-CSS-Javascript-Publishing/dp/8183335152/ref=sr_1_1?keywords=css+books&qid=1581563596&sr=8-1",
      bookImage: "./../assets/img/BookCSS.jpg",
      price: 1200
    }
  ];
}
