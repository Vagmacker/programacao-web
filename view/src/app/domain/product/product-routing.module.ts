import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSaveComponent } from './product-save/product-save.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

export const ProductRoutes: Routes = [
    {path: '', pathMatch: 'full', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'products/save', component: ProductSaveComponent},
    {path: 'products/show/:id', component: ProductViewComponent},
    {path: 'products/edit/:id', component: ProductEditComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(ProductRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule { }
