import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {DemoComponent} from './Demo/Demo.component';
import {TestComponent} from './Test/test.component';
import {ProductComponent} from './product/product.component';
import {ProductChildComponent} from './addproduct/addproduct.component';
import {AppParentComponent} from './appparent/app.component';
import {AppChildComponent} from './appchild/appchild.component';
import {StarRatingComponent} from './starrating/starrating.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
