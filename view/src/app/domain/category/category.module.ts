import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './category.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CategorySaveComponent,
    CategoryListComponent,
    CategoryViewComponent,
    CategoryEditComponent
  ],
  providers: [
    CategoryService
  ]
})

export class CategoryModule { }
