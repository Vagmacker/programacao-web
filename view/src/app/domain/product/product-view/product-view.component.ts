import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public id: any;
  public product: Product;

  /**
   * Construtor da classe.
   *
   * @param productService
   * @param router
   * @param route
   */
  constructor(
    private categoryService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
      this.product = new Product();
      this.id = this.route.snapshot.paramMap.get('id');
      this.categoryService.findOne(this.id).subscribe(data => {
        this.product = data['data'];
      });
    }

  ngOnInit() {
  }

}
