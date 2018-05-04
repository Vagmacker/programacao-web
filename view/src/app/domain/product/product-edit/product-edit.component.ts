import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
      this.product = new Product();
      this.id = this.route.snapshot.paramMap.get('id');
      this.productService.findOne(this.id).subscribe(
        data => {
          this.product = data['data'];
        }
      );
    }

  ngOnInit() {
  }

  /**
   * Método que edita um produto.
   */
  public edit() {
    return this.productService.update(this.product).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }
}
