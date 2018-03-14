import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySaveComponent } from './category-save/category-save.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

export const CategoryRoutes: Routes = [
    {path: '', pathMatch: 'full', component: CategoryListComponent},
    {path: 'categories', component: CategoryListComponent},
    {path: 'categories/save', component: CategorySaveComponent},
    {path: 'categories/show/:id', component: CategoryViewComponent},
    {path: 'categories/edit/:id', component: CategoryEditComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(CategoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule { }
