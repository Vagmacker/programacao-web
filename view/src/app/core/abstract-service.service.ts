import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AbstractService {

    private headers = new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    });

    private BASE_URL = environment.API_URL;
    private URL: string;

    /**
     * Construtor da classe.
     *
     * @param service
     */
    constructor(service: string) {
        this.URL = this.BASE_URL + service;
    }

    /**
     * Retorna a URL do serviço solicitado.
     */
    public getUrl(): string {
        return this.URL;
    }

    /**
     * Retorna os Headers necessários para enviar no corpo das requisições.
     */
    public getHeaders(): any {
        return {headers: this.headers};
    }

    /**
     * Retorna os parâmetros necessários.
     *
     * @param params
     */
    public getParams(params: any): any {
        let httpParams = new HttpParams();

        Object.keys(params).forEach(key => {
            httpParams = httpParams.append(key, params[key]);
        });

        return {params: httpParams};
    }

    /**
     * Responsável por tratar os dados retornados pela requisição.
     *
     * @param res
     * @returns {any|{}}
     */
    data(res: Response): any {
        const body = res.json();
        return body || {};
    }

    /**
     * Responsável por fazer o tratamento dos erros retornados pela requisição.
     *
     * @param error
     * @returns {any}
     */
    handlerError(error: Response | any) {
        const body = error._body ? JSON.parse(error._body) : '';
        return Observable.throw({'message': body.message});
    }
}
