import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ZipincloudService {
  constructor(public http: HttpClient) {}

  //TODO:POST GET PUT DELETE - Produtos//
  salvarProduto(data: any) {
    return this.http
      .post(environment.url + 'api/produtoes', data, environment.headersPost)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  modificarProduto(data: any) {
    return this.http
      .put(
        environment.url + 'api/produtoes/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
        location.href = '/produtos';
      });
  }

  excluirProduto(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/produtoes/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  obterDadosProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  //TODO:POST GET PUT DELETE - Categorias//
  salvarCategoria(data: any) {
    data.HabElisa == '' || data.HabElisa == null ? (data.HabElisa = false) : '';
    data.HabTotem == '' || data.HabTotem == null ? (data.HabTotem = false) : '';
    data.HabPdv == '' || data.HabPdv == null ? (data.HabPdv = false) : '';
    return this.http
      .post(environment.url + 'api/categories', data, environment.headersPost)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  modificarCategoria(data: any) {
    data.HabElisa == '' || data.HabElisa == null ? (data.HabElisa = false) : '';
    data.HabTotem == '' || data.HabTotem == null ? (data.HabTotem = false) : '';
    data.HabPdv == '' || data.HabPdv == null ? (data.HabPdv = false) : '';
    return this.http
      .put(
        environment.url + 'api/categories/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  excluirCategoria(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/categories/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  //TODO:POST GET PUT DELETE - Marcas//
  salvarMarca(data: any) {
    return this.http
      .post(
        environment.url + 'api/marcasprodutos',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  modificarMarca(data: any) {
    return this.http
      .put(
        environment.url + 'api/marcasprodutos/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  excluirMarca(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/marcasprodutos/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  //TODO:POST GET PUT DELETE - Tipo de produto//
  salvarTipoProduto(data: any) {
    return this.http
      .post(environment.url + 'api/tipoproduto', data, environment.headersPost)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  modificarTipoProduto(data: any) {
    return this.http
      .put(
        environment.url + 'api/tipoproduto/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  excluirTipoProduto(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/tipoproduto/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  //TODO:POST GET PUT DELETE - Tipo de integrações fiscais//
  salvarIntegracaoFiscal(data: any) {
    return this.http
      .post(
        environment.url + 'api/integracaofiscal',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  modificarIntegracaoFiscal(data: any) {
    return this.http
      .put(
        environment.url + 'api/integracaofiscal/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  excluirIntegracaoFiscal(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/integracaofiscal/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  //TODO:POST GET PUT DELETE - Ncm//
  salvarNcm(data: any) {
    return this.http
      .post(environment.url + 'api/ncm', data, environment.headersPost)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  modificarNcm(data: any) {
    return this.http
      .put(
        environment.url + 'api/ncm/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  excluirNcm(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/ncm/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  //TODO:GETs ESPECIFICOS//

  obterTodosDadosProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes/produtos', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterTodosDadosProdutosDataTable() {
    return this.http
      .get(
        environment.url + 'api/produtoes/getbydatatable/10/1',
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosProdutosPeloID(ID: any) {
    return this.http
      .get(environment.url + 'api/produtoes/' + ID, environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosCategoriasProdutos() {
    return this.http
      .get(environment.url + 'api/categories', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosMarcasProdutos() {
    return this.http
      .get(environment.url + 'api/marcasprodutos', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosTiposProdutos() {
    return this.http
      .get(environment.url + 'api/tipoproduto', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosIntegracaoFiscalProdutos() {
    return this.http
      .get(environment.url + 'api/integracaofiscal', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosIntegracaoFiscalPeloID(ID: any) {
    return this.http
      .get(
        environment.url + 'api/integracaofiscal/getintegracaofiscalbyid/' + ID,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosNcmPeloID(ID: any) {
    return this.http
      .get(environment.url + 'api/ncm/getncmbyid/' + ID, environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosMarcaProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes/marcaproduto', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosNCMProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes/ncm', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosMovimentacaoEstoquePeloID(prodID: any) {
    return this.http
      .get(
        environment.url + 'api/produtoes/movimentoestoque/' + prodID,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosMovimentacaoEstoque() {
    return this.http
      .get(
        environment.url + 'api/produtoes/movimentoestoque',
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosVendedor(vendedorid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoaVendedors/' + vendedorid,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  //TODO: Vendas//
  obterDadosVendaProdutos() {
    return this.http
      .get(environment.url + 'api/vendaitems', environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosVendaProdutosByVendaID(vendaid: any) {
    return this.http
      .get(
        environment.url + 'api/vendaitems/getbyvendaid/' + vendaid,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterDadosVendaPeloID(vendaid: any) {
    return this.http
      .get(environment.url + 'api/vendaitems/' + vendaid, environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  obterTodosDadosVendaPeloID(vendaid: any) {
    return this.http
      .get(environment.url + 'api/vendas/' + vendaid, environment.headers)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }
}
