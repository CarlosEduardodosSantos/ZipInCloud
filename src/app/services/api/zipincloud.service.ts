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

  async obterTodosDadosMovEstoqueVendasPeloID(vendaid: any) {
    let vendaData: any;
    let pessoaClienteData: any;
    let pessoaVendedorData: any;
    let pessoaData: any;
    let vendedorData: any;

    let fullData: any;

    await this.http
      .get(
        environment.url + 'api/produtoes/venda/detalhe/venda/' + vendaid,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        vendaData = data;
      });

    await this.http
      .get(
        environment.url +
          'api/produtoes/venda/detalhe/pessoacliente/' +
          vendaData[0].pessoaClienteID,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        pessoaClienteData = data;
      });

    await this.http
      .get(
        environment.url +
          'api/produtoes/venda/detalhe/pessoa/' +
          pessoaClienteData[0].pessoaID,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        pessoaData = data;
      });

    await this.http
      .get(
        environment.url +
          'api/produtoes/venda/detalhe/pessoavendedor/' +
          vendaData[0].pessoaVendedorID,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        pessoaVendedorData = data;
      });

    await this.http
      .get(
        environment.url +
          'api/produtoes/venda/detalhe/pessoa/' +
          pessoaVendedorData[0].pessoaID,
        environment.headers
      )
      .toPromise()
      .then((data: any) => {
        vendedorData = data;
      });

    fullData = await [].concat(
      pessoaData[0],
      pessoaClienteData[0],
      vendaData[0],
      vendedorData[0],
      pessoaVendedorData[0]
    );

    return fullData;
  }
}
