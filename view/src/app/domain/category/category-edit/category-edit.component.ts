import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  public id: any;
  public category: Category;

  /**
   * Construtor da classe.
   *
   * @param categoryService
   * @param router
   * @param route
   */
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
      this.category = new Category();
      this.id = this.route.snapshot.paramMap.get('id');
      this.categoryService.findOne(this.id).subscribe(
        data => {
          this.category = data['data'];
        }
      );
    }

  ngOnInit() {}

  /**
   * Método que salva uma categoria.
   */
  public edit() {
    return this.categoryService.update(this.category).subscribe(
      data => {
        this.router.navigate(['/categories']);
      });
  }
}
