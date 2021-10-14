import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ZipincloudService {
  constructor(public http: HttpClient) {}

  //TODO:POST GET PUT DELETE//
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
      .get(environment.url + 'api/produtoes/categorias', environment.headers)
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
