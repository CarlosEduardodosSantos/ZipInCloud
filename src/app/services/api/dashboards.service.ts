import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardsService {
  constructor(public http: HttpClient) {}

  //TODO: VENDAS//
  obterVendasFaturadasDia() {
    return this.http
      .get(
        environment.url + 'api/dashboards/vendas/faturadas/dia',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterVendasFaturadasMes() {
    return this.http
      .get(
        environment.url + 'api/dashboards/vendas/faturadas/mes',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterVendasFaturadasAno() {
    return this.http
      .get(
        environment.url + 'api/dashboards/vendas/faturadas/ano',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterVendasFaturadasMesByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/vendas/faturadas/mes/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterVendasProdutosMesByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/vendas/produtos/mes/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterVendasProdutosAno() {
    return this.http
      .get(
        environment.url + 'api/dashboards/vendas/produtos/anual',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
}
