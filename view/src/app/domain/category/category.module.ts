import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryService } from './category.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule,
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
