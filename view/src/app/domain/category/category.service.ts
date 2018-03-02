import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class CategoryService {

  BASE_URL = environment.API_URL + '/categories';

  constructor(private http: HttpClient) {}

  /**
   * Retorna todas as categorias.
   */
  findAll(): Observable<Object> {
    return this.http.get(this.BASE_URL);
  }
}
