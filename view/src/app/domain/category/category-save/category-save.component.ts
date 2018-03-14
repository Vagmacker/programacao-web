import { Router } from '@angular/router';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-save',
  templateUrl: './category-save.component.html',
  styleUrls: ['./category-save.component.css']
})
export class CategorySaveComponent implements OnInit {

  public category: Category;

  /**
   * Construtor da classe.
   *
   * @param categoryService
   * @param router
   */
  constructor(private categoryService: CategoryService, private router: Router) {
    this.category = new Category();
  }

  ngOnInit() {}

  /**
   * Método que salva uma nova categoria.
   */
  public save() {
    return this.categoryService.save(this.category).subscribe(
      response => {
        this.router.navigate(['/categories']);
      });
  }
}
