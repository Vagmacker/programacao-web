import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  categories: Category[];

  /**
   * Construtor da classe.
   *
   * @param categoryService
   */
  constructor(private categoryService: CategoryService) { }

  /**
   * Função carregada quando o componente é solicitado.
   */
  ngOnInit() {
    this.categoryService.findAll().subscribe(
      data => this.categories = data['data']
    );
  }
}
