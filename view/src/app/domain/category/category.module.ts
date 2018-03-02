import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryRouting } from './category-routing';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CategoryRouting,
    RouterModule
  ],
  declarations: [
    CategorySaveComponent,
    CategoryListComponent
  ],
  providers: [
    CategoryService
  ]
})

export class CategoryModule { }
