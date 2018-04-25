import { Category } from './category';
import { AbstractService } from './../../core/abstract-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService extends AbstractService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) {
    super('categories');
  }

  /**
   * Retorna todas as categorias.
   */
  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.getUrl());
  }

  /**
   * Retorna uma categoria.
   *
   * @param data
   */
  findOne(id: number): Observable<any> {
    return this.http.get(this.getUrl() + '/' + id);
  }

  /**
   * Método que faz a requisição para o servidor para salvar uma nova categoria.
   *
   * @param category
   */
  save(category: Category): Observable<any> {
    return this.http.post(this.getUrl(), category, this.getHeaders());
  }

  /**
   * Método que faz a requisição para o servidor para atualizar uma nova categoria.
   *
   * @param category
   */
  update(category: Category): Observable<any> {
    return this.http.put(this.getUrl() + '/' + category.id, category, this.getHeaders());
  }

  /**
   * Método que faz a requisição para o servidor para excluir uma categoria.
   *
   * @param data
   */
  delete(id: number): Observable<any> {
    return this.http.delete(this.getUrl() + '/' + id);
  }
}
