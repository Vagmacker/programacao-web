import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  /**
   * Construtor da claase.
   *
   * @param productService
   */
  constructor(private productService: ProductService, private router: Router) { }

  /**
   * Função carregada quando o componente é solicitado.
   */
  ngOnInit() {
    this.productService.findAll().subscribe(
      data => this.products = data['data']
    );
  }

  /**
   * Deleta um produto.
   *
   * @param id
   */
  delete(id: number) {
    return this.productService.delete(id).subscribe(response => {
      this.router.navigate(['/products']);
    });
  }
}
