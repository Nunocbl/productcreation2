import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductCardComponent } from './new-product-card/new-product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { ProductOptionComponent } from './product-option/product-option.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { ColorsComponent } from './colors/colors.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProductCardComponent,
    ProductOptionComponent,
    CategorySelectorComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
