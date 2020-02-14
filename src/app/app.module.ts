import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavComponent } from "./layouts/nav/nav.component";
import { Banner1Component } from "./layouts/banner1/banner1.component";
import { Banner2Component } from "./layouts/banner2/banner2.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { ContactusComponent } from "./layouts/contactus/contactus.component";
import { Banner3Component } from "./layouts/banner3/banner3.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { PenComponent } from "./products/pen/pen.component";

import { SqrtPipe } from "./pipes/sqrt.pipe";
import { FirstDirective } from "./directives/first.directive";
import { HostDirective } from './directives/host.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Banner1Component,
    Banner2Component,
    ProductsComponent,
    ContactusComponent,
    Banner3Component,
    FooterComponent,
    MobPartsComponent,
    BooksComponent,
    PenComponent,
    SqrtPipe,
    FirstDirective,
    HostDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
