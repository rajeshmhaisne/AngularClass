import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from "./layouts/nav/nav.component";
import { Banner1Component } from "./layouts/banner1/banner1.component";
import { Banner2Component } from './layouts/banner2/banner2.component';
import { ProductsComponent } from './layouts/products/products.component';
import { ContactusComponent } from './layouts/contactus/contactus.component';
import { Banner3Component } from './layouts/banner3/banner3.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavComponent, Banner1Component, Banner2Component, ProductsComponent, ContactusComponent, Banner3Component, FooterComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
