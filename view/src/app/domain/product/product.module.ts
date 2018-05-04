import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSaveComponent } from './product-save/product-save.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    ProductSaveComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductEditComponent
  ],
  providers: [
    ProductService
  ]
})

export class ProductModule { }
