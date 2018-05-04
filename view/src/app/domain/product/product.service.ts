import { Product } from './product';
import { AbstractService } from './../../core/abstract-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService extends AbstractService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) {
    super('products');
  }

  /**
   * Retorna todas os produtos.
   */
  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getUrl());
  }

  /**
   * Retorna um produto.
   *
   * @param id
   */
  findOne(id: number): Observable<any> {
    return this.http.get(this.getUrl() + '/' + id);
  }

  /**
   * Método que faz a requisição para o servidor para salvar um novo produto.
   *
   * @param product
   */
  save(product: Product): Observable<any> {
    return this.http.post(this.getUrl(), product, this.getHeaders());
  }

  /**
   * Método que faz a requisição para o servidor para atualizar um novo produto.
   *
   * @param product
   */
  update(product: Product): Observable<any> {
    return this.http.put(this.getUrl() + '/' + product.id, product, this.getHeaders());
  }

  /**
   * Método que faz a requisição para o servidor para excluir um produto.
   *
   * @param id
   */
  delete(id: number): Observable<any> {
    return this.http.delete(this.getUrl() + '/' + id);
  }
}
