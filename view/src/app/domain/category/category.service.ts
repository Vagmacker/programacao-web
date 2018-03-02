import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Category } from './category';

@Injectable()
export class CategoryService {

  BASE_URL = environment.API_URL + '/categories';
  categories: Category[];

  constructor(private http: HttpClient) {
    this.categories = this.findAll;
  }

  /**
   * Retorna todas as categorias.
   */
  findAll(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
}
