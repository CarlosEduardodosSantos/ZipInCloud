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
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
      });
  }

  excluirProduto(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/produtoes/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Clientes//
  obterClientes() {
    return this.http
      .get(environment.url + 'api/PessoasAPI/clientes', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterClientesByID(ID: any) {
    return this.http
      .get(
        environment.url + 'api/PessoasAPI/clientes/' + ID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  salvarClientes(data: any) {
    return this.http
      .post(
        environment.url + 'api/PessoasAPI/clientes',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarClientes(data: any) {
    return this.http
      .put(
        environment.url + 'api/PessoasAPI/clientes/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirClientes(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/PessoasAPI/clientes/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Categorias//
  obterCategoriaByID(id: any) {
    return this.http
      .get(environment.url + 'api/categories/' + id, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  salvarCategoria(data: any) {
    data.HabElisa == '' || data.HabElisa == null ? (data.HabElisa = false) : '';
    data.HabTotem == '' || data.HabTotem == null ? (data.HabTotem = false) : '';
    data.HabPdv == '' || data.HabPdv == null ? (data.HabPdv = false) : '';
    return this.http
      .post(environment.url + 'api/categories', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarCategoria(data: any) {
    data.HabElisa == '' || data.HabElisa == null ? (data.HabElisa = false) : '';
    data.HabTotem == '' || data.HabTotem == null ? (data.HabTotem = false) : '';
    data.HabPdv == '' || data.HabPdv == null ? (data.HabPdv = false) : '';
    return this.http
      .put(
        environment.url + 'api/categories/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirCategoria(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/categories/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Categorias Documentos//
  obterCategoriaDocumentos() {
    return this.http
      .get(environment.url + 'api/CategoriaDocumentos', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterCategoriaDocumentosByID(ID: any) {
    return this.http
      .get(
        environment.url + 'api/CategoriaDocumentos/' + ID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  salvarCategoriaDocumentos(data: any) {
    return this.http
      .post(
        environment.url + 'api/CategoriaDocumentos',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarCategoriaDocumentos(data: any) {
    return this.http
      .put(
        environment.url + 'api/CategoriaDocumentos/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirCategoriaDocumentos(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/CategoriaDocumentos/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Empresa Certificados//
  obterEmpresaCertificado() {
    return this.http
      .get(environment.url + 'api/Empresas/certificados', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterEmpresaCertificadoByID(ID: any) {
    return this.http
      .get(
        environment.url + 'api/Empresas/certificados/' + ID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterEmpresaCertificadoByIDOne(ID: any) {
    return this.http
      .get(
        environment.url + 'api/Empresas/certificados/once/' + ID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  salvarEmpresaCertificado(data: any) {
    return this.http
      .post(
        environment.url + 'api/Empresas/certificados',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarEmpresaCertificado(data: any) {
    console.log(data);
    return this.http
      .put(
        environment.url + 'api/Empresas/certificados/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirEmpresaCertificado(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/Empresas/certificados' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
      });
  }

  excluirMarca(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/marcasprodutos/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Tipo de produto//
  salvarTipoProduto(data: any) {
    return this.http
      .post(environment.url + 'api/tipoproduto', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
      });
  }

  excluirTipoProduto(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/tipoproduto/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
      });
  }

  excluirIntegracaoFiscal(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/integracaofiscal/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Ncm//
  salvarNcm(data: any) {
    return this.http
      .post(environment.url + 'api/ncm', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
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
      .then((res) => {
        return res;
      });
  }

  excluirNcm(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/ncm/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Vendas//
  salvarVenda(data: any) {
    return this.http
      .post(environment.url + 'api/vendas', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarVenda(data: any) {
    console.log(data);
    return this.http
      .put(
        environment.url + 'api/vendas/' + data.id,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirVenda(ID: any) {
    return this.http
      .delete(environment.url + 'api/vendas/' + ID, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        if (err.status === 500) {
          this.excluirDocumento(ID).then((res) => {
            console.log(res);
          });
        }
      });
  }

  //TODO:POST GET PUT DELETE - Compras//
  salvarCompra(data: any) {
    return this.http
      .post(environment.url + 'api/compra', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarCompra(data: any) {
    return this.http
      .put(
        environment.url + 'api/compra/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirCompra(ID: any) {
    return this.http
      .delete(environment.url + 'api/compra/' + ID, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        if (err.status === 500) {
          this.excluirDocumento(ID).then((res) => {
            console.log(res);
          });
        }
      });
  }

  //TODO:POST GET PUT DELETE - Empresa//
  salvarEmpresa(data: any) {
    return this.http
      .post(environment.url + 'api/Empresas', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterEmpresa() {
    return this.http
      .get(environment.url + 'api/Empresas/', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterEmpresaByID(id: any) {
    return this.http
      .get(environment.url + 'api/Empresas/' + id, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarEmpresa(data: any) {
    return this.http
      .put(
        environment.url + 'api/Empresas/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirEmpresa(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/Empresas/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:GET POST PUT DELETE - GrupoEmpresas//
  obterGrupoEmpresa() {
    return this.http
      .get(environment.url + 'api/GrupoEmpresas/', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterGrupoEmpresaByID(id: any) {
    return this.http
      .get(environment.url + 'api/GrupoEmpresas/' + id, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  salvarGrupoEmpresa(data: any) {
    return this.http
      .post(
        environment.url + 'api/GrupoEmpresas',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarGrupoEmpresa(data: any) {
    return this.http
      .put(
        environment.url + 'api/GrupoEmpresas/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirGrupoEmpresa(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/GrupoEmpresas/' + ID,

        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:GET POST PUT DELETE - Unidade Federativa//
  obterTodosEstadosUF() {
    return this.http
      .get(environment.url + 'api/unidadefederativa', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosEstadosUFByID(id: any) {
    return this.http
      .get(environment.url + 'api/unidadefederativa/' + id, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:GET POST PUT DELETE - Municipios//
  obterTodosMunicipios() {
    return this.http
      .get(
        environment.url + 'api/unidadefederativa/municipios',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosMunicipiosByID(id: any) {
    return this.http
      .get(
        environment.url + 'api/unidadefederativa/municipios/' + id,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterMunicipioByID(id: any, estadoid: any) {
    return this.http
      .get(
        environment.url +
          'api/unidadefederativa/municipio/' +
          id +
          '/' +
          estadoid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POST GET PUT DELETE - Formas de Pagamento//
  obterFormaPagamento() {
    return this.http
      .get(environment.url + 'api/FormaPagamentoes', environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterFormaPagamentoByID(ID: any) {
    return this.http
      .get(
        environment.url + 'api/FormaPagamentoes/' + ID,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  salvarFormaPagamento(data: any) {
    return this.http
      .post(
        environment.url + 'api/FormaPagamentoes',
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  modificarFormaPagamento(data: any) {
    return this.http
      .put(
        environment.url + 'api/FormaPagamentoes/' + data.ID,
        data,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirFormaPagamento(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/FormaPagamentoes/' + ID,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:GETs ESPECIFICOS//

  obterTodosDadosProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes/produtos', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosProdutosDataTable() {
    return this.http
      .get(
        environment.url + 'api/produtoes/getbydatatable/10/1',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosProdutosPeloID(ID: any) {
    return this.http
      .get(environment.url + 'api/produtoes/' + ID, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosCategoriasProdutos() {
    return this.http
      .get(environment.url + 'api/categories', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosMarcasProdutos() {
    return this.http
      .get(environment.url + 'api/marcasprodutos', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosTiposProdutos() {
    return this.http
      .get(environment.url + 'api/tipoproduto', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosIntegracaoFiscalProdutos() {
    return this.http
      .get(environment.url + 'api/integracaofiscal', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosIntegracaoFiscalPeloID(ID: any) {
    return this.http
      .get(
        environment.url + 'api/integracaofiscal/getintegracaofiscalbyid/' + ID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosNcmPeloID(ID: any) {
    return this.http
      .get(environment.url + 'api/ncm/' + ID, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosMarcaProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes/marcaproduto', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosNCMProdutos() {
    return this.http
      .get(environment.url + 'api/produtoes/ncm', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosMovimentacaoEstoquePeloID(prodID: any) {
    return this.http
      .get(
        environment.url + 'api/produtoes/movimentoestoque/' + prodID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosTransportadoraPeloID(transportadoraID: any) {
    return this.http
      .get(
        environment.url + 'api/PessoasAPI/transportadora/' + transportadoraID,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosMovimentacaoEstoque() {
    return this.http
      .get(
        environment.url + 'api/produtoes/movimentoestoque',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosVendedor(vendedorid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoaVendedors/' + vendedorid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosPessoa(pessoaid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoasAPI/obterdados/' + pessoaid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosClienteCompleto(clienteid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoasAPI/cliente/' + clienteid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosVendedorCompleto(vendedorid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoasAPI/vendedor/' + vendedorid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosComprador(compradorid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoaCompradorApi/' + compradorid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosFornecedor(fornecedorid: any) {
    return this.http
      .get(
        environment.url + 'api/PessoaFornecedorApi/' + fornecedorid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosComprador() {
    return this.http
      .get(environment.url + 'api/PessoaCompradorApi', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosFornecedor() {
    return this.http
      .get(environment.url + 'api/PessoaFornecedorApi', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosTipoOperação(operacaoid: any) {
    return this.http
      .get(
        environment.url + 'api/TipoOperacaoAPI/obterdados/' + operacaoid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterFormasDePagamento() {
    return this.http
      .get(environment.url + 'api/FormaPagamentoes', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosProdutosNaVenda(id: any) {
    return this.http
      .get(
        environment.url + 'api/vendaitems/getbyvendaid/' + id,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosClientes() {
    return this.http
      .get(environment.url + 'api/PessoaClientesApi', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosVendedores() {
    return this.http
      .get(environment.url + 'api/PessoaVendedors', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosOperacoes() {
    return this.http
      .get(
        environment.url + 'api/TipoOperacaoAPI/obterdados',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosOperacoesVenda() {
    return this.http
      .get(
        environment.url + 'api/TipoOperacaoAPI/venda/obterdados',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosOperacoesCompra() {
    return this.http
      .get(
        environment.url + 'api/TipoOperacaoAPI/compra/obterdados',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosTransportadoras() {
    return this.http
      .get(
        environment.url + 'api/PessoasAPI/transportadora',
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterFormasDePagamentoPeloID(id: any) {
    return this.http
      .get(environment.url + 'api/FormaPagamentoes/' + id, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  excluirDocumento(ID: any) {
    return this.http
      .delete(
        environment.url + 'api/Documentoes/deletebyvendaid/' + ID,
        environment.headersPost
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:POSTs ESPECIFICOS//
  salvarNovoProdutoNaVendaItems(data: any) {
    return this.http
      .post(environment.url + 'api/vendaitems', data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:DELETEs ESPECIFICOS//
  deletarProdutoNaVendaItems(id: any) {
    return this.http
      .delete(environment.url + 'api/vendaitems/' + id, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO:PUTs ESPECIFICOS//
  faturarVenda(id: any, data: any) {
    return this.http
      .put(environment.url + 'api/vendas/' + id, data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  faturarCompra(id: any, data: any) {
    return this.http
      .put(environment.url + 'api/compra/' + id, data, environment.headersPost)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO: Compras//
  obterDadosCompras() {
    return this.http
      .get(environment.url + 'api/compra', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosComprasProdutos() {
    return this.http
      .get(environment.url + 'api/compraitems', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosComprasProdutosByComprasID(compraid: any) {
    return this.http
      .get(
        environment.url + 'api/compraitems/getbycompraid/' + compraid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosComprasPeloID(compraid: any) {
    return this.http
      .get(environment.url + 'api/compraitems/' + compraid, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosComprasPeloID(compraid: any) {
    return this.http
      .get(environment.url + 'api/compra/' + compraid, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  //TODO: Vendas//
  obterDadosVendas() {
    return this.http
      .get(environment.url + 'api/vendas', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosVendaProdutos() {
    return this.http
      .get(environment.url + 'api/vendaitems', environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosVendaProdutosByVendaID(vendaid: any) {
    return this.http
      .get(
        environment.url + 'api/vendaitems/getbyvendaid/' + vendaid,
        environment.headers
      )
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterDadosVendaPeloID(vendaid: any) {
    return this.http
      .get(environment.url + 'api/vendaitems/' + vendaid, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }

  obterTodosDadosVendaPeloID(vendaid: any) {
    return this.http
      .get(environment.url + 'api/vendas/' + vendaid, environment.headers)
      .toPromise()
      .then((res) => {
        return res;
      });
  }
}
