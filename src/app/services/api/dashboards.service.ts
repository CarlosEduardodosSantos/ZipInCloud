import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardsService {
  constructor(public http: HttpClient) {}

  //TODO: DASHBOARD VENDAS//
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

  //TODO: DASHBOARD COMPRAS//
  obterComprasFaturadasDia() {
    return this.http
      .get(
        environment.url + 'api/dashboards/compras/faturadas/dia',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterComprasFaturadasMes() {
    return this.http
      .get(
        environment.url + 'api/dashboards/compras/faturadas/mes',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterComprasFaturadasAno() {
    return this.http
      .get(
        environment.url + 'api/dashboards/compras/faturadas/ano',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterComprasFaturadasMesByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/compras/faturadas/mes/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterComprasProdutosMesByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/compras/produtos/mes/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterComprasProdutosAno() {
    return this.http
      .get(
        environment.url + 'api/dashboards/compras/produtos/anual',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO: DASHBOARD CONTAS A RECEBER//
  obterContasAReceberHojeRecebido() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/hoje/recebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberMesRecebido() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/mes/recebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberAnoRecebido() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/ano/recebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberMesBaixadoByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/mes/recebido/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberHojeAberto() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/hoje/aberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberMesAberto() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/mes/aberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberAnoAberto() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/ano/aberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberMesAbertoByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/mes/aberto/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterContasAReceberMesCategoriaBaixadoByID() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/mes/categoriarecebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAReceberMesCategoriaAbertoByID() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/receber/mes/categoriaaberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO: DASHBOARD CONTAS A PAGAR//
  obterContasAPagarHojeRecebido() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/hoje/recebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarMesRecebido() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/mes/recebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarAnoRecebido() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/ano/recebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarMesBaixadoByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/mes/recebido/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarHojeAberto() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/hoje/aberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarMesAberto() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/mes/aberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarAnoAberto() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/ano/aberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarMesAbertoByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/mes/aberto/' + id,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterContasAPagarMesCategoriaBaixadoByID() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/mes/categoriarecebido',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
  obterContasAPagarMesCategoriaAbertoByID() {
    return this.http
      .get(
        environment.url + 'api/dashboards/contas/pagar/mes/categoriaaberto',
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }
}
