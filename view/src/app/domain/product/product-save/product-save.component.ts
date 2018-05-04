import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit {

  public product: Product;
  public categories: Category[];

  /**
   * Construtor da classe.
   *
   * @param productService
   * @param router
   */
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.product = new Product();
  }

  /**
   * Método carregado quando o componente estiver sendo solicitado.
   */
  ngOnInit() {
    this.categoryService.findAll().subscribe(response => {
      this.categories = response['data'];
    });
  }

  /**
   * Método que salva um novo produto.
   */
  public save() {
    return this.productService.save(this.product).subscribe(response => {
      this.router.navigate(['/products']);
    });
  }
}
