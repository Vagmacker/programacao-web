import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategorySaveComponent } from './domain/category/category-save/category-save.component';
import { CategoryListComponent } from './domain/category/category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategorySaveComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
