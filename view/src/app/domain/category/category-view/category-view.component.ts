import { CategoryService } from './../category.service';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

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

  ngOnInit() { }
}
