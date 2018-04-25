import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoryModule } from './domain/category/category.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
