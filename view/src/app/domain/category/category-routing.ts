import { CategoryListComponent } from './category-list/category-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CategoryRoutes: Routes = [
    {path: '', pathMatch: 'full', component: CategoryListComponent},
    {path: 'categories', component: CategoryListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(CategoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRouting { }
