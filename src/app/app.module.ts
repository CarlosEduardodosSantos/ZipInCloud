import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent as AcessoRapidoIndex } from './pages/acessorapido/index/index.component';
import { IndexComponent as ProdutoIndex } from './pages/produtos/index/index.component';
import { EditarprodutoComponent as ProdutoEditar } from './pages/produtos/editarproduto/editarproduto.component';
import { CadastrarComponent as ProdutoCadastrar } from './pages/produtos/cadastrar/cadastrar.component';
import { IndexComponent as VendaIndex } from './pages/vendas/index/index.component';
import { EditarvendaComponent as VendaEditar } from './pages/vendas/editarvenda/editarvenda.component';
import { CadastrarComponent as VendaCadastrar } from './pages/vendas/cadastrar/cadastrar.component';
import { CategoriasComponent as CategoriaIndex } from './pages/cadastro/categorias/categorias.component';
import { MarcasComponent as MarcaIndex } from './pages/cadastro/marcas/marcas.component';
import { IntegracaofiscalComponent as IntegracaoFiscalIndex } from './pages/cadastro/integracaofiscal/index/integracaofiscal.component';
import { IntegracaofiscalDetalhesComponent as IntegracaofiscalDetalhes } from './pages/cadastro/integracaofiscal/detalhes/integracaofiscal-detalhes.component';
import { CadastrarComponent as IntegracaoFiscalCadastrar } from './pages/cadastro/integracaofiscal/cadastrar/cadastrar.component';
import { EditarComponent as IntegracaoFiscalEditar } from './pages/cadastro/integracaofiscal/editar/editar.component';
import { IndexComponent as NCMIndex } from './pages/cadastro/ncm/index/index.component';
import { EditarComponent as NCMEditar } from './pages/cadastro/ncm/editar/editar.component';
import { CadastrarComponent as NCMCadastrar } from './pages/cadastro/ncm/cadastrar/cadastrar.component';
import { DetalhesComponent as NCMDetalhes } from './pages/cadastro/ncm/detalhes/detalhes.component';
import { IndexComponent as MovimentaoEstoqueIndex } from './pages/movimentacaoestoque/index/index.component';
import { IndexComponent as CompraIndex } from './pages/compra/index/index.component';
import { CadastroComponent as CompraCadastrar } from './pages/compra/cadastro/cadastro.component';
import { EditarComponent as CompraEditar } from './pages/compra/editar/editar.component';
import { IndexComponent as EmpresasIndex } from './pages/cadastro/empresas/index/index.component';
import { CadastroComponent as EmpresasCadastrar } from './pages/cadastro/empresas/cadastro/cadastro.component';
import { EditarComponent as EmpresasEditar } from './pages/cadastro/empresas/editar/editar.component';
import { IndexComponent as GrupoEmpresasIndex } from './pages/cadastro/grupoempresa/index/index.component';
import { CadastroComponent as GrupoEmpresasCadastrar } from './pages/cadastro/grupoempresa/cadastro/cadastro.component';
import { EditarComponent as GrupoEmpresasEditar } from './pages/cadastro/grupoempresa/editar/editar.component';
import { IndexComponent as ClientesIndex } from './pages/cadastro/clientes/index/index.component';
import { EditarComponent as ClientesEditar } from './pages/cadastro/clientes/editar/editar.component';
import { CadastrarComponent as ClientesCadastrar } from './pages/cadastro/clientes/cadastrar/cadastrar.component';
import { IndexComponent as FornecedoresIndex } from './pages/cadastro/fornecedores/index/index.component';
import { EditarComponent as FornecedoresEditar } from './pages/cadastro/fornecedores/editar/editar.component';
import { CadastrarComponent as FornecedoresCadastrar } from './pages/cadastro/fornecedores/cadastrar/cadastrar.component';
import { IndexComponent as ContasReceberIndex } from './pages/contas/receber/index/index.component';
import { IndexComponent as ContasPagarIndex } from './pages/contas/pagar/index/index.component';
import { IndexComponent as FormasPagamentoIndex } from './pages/cadastro/formaspagamento/index/index.component';
import { CadastroComponent as FormasPagamentoCadastrar } from './pages/cadastro/formaspagamento/cadastro/cadastro.component';
import { EditarComponent as FormasPagamentoEditar } from './pages/cadastro/formaspagamento/editar/editar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CategoriasCriarComponent } from './components/cadastro/categorias-criar/categorias-criar.component';
import { CategoriasModificarComponent } from './components/cadastro/categorias-modificar/categorias-modificar.component';
import { MarcasCriarComponent } from './components/cadastro/marcas-criar/marcas-criar.component';
import { MarcasModificarComponent } from './components/cadastro/marcas-modificar/marcas-modificar.component';
import { TipoprodutoModificarComponent } from './components/cadastro/tipoproduto-modificar/tipoproduto-modificar.component';
import { TipoprodutoCriarComponent } from './components/cadastro/tipoproduto-criar/tipoproduto-criar.component';
import { ClientesExibirComponent } from './components/cadastro/vendas/clientes-exibir/clientes-exibir.component';
import { VendedoresExibirComponent } from './components/cadastro/vendas/vendedores-exibir/vendedores-exibir.component';
import { TipooperacoesExibirComponent } from './components/cadastro/vendas/tipooperacoes-exibir/tipooperacoes-exibir.component';
import { TransportadoraExibirComponent } from './components/cadastro/vendas/transportadora-exibir/transportadora-exibir.component';
import { FormaspagamentoExibirComponent } from './components/cadastro/vendas/formaspagamento-exibir/formaspagamento-exibir.component';
import { GrupoExibirComponent } from './components/cadastro/empresas/grupo-exibir/grupo-exibir.component';
import { RegimetributarioExibirComponent } from './components/cadastro/empresas/regimetributario-exibir/regimetributario-exibir.component';
import { EstadoExibirComponent } from './components/cadastro/empresas/estado-exibir/estado-exibir.component';
import { MunicipioExibirComponent } from './components/cadastro/empresas/municipio-exibir/municipio-exibir.component';
import { AcessorapidoComponent } from './components/cards/acessorapido/acessorapido.component';
import { FornecedorExibirComponent } from './components/cadastro/compra/fornecedor-exibir/fornecedor-exibir.component';
import { TipooperacaoCompraExibirComponent } from './components/cadastro/compra/tipooperacao-compra-exibir/tipooperacao-compra-exibir.component';
import { TransportadoraCompraExibirComponent } from './components/cadastro/compra/transportadora-compra-exibir/transportadora-compra-exibir.component';
import { CompradorCompraExibirComponent } from './components/cadastro/compra/comprador-compra-exibir/comprador-compra-exibir.component';
import { TipoPessoaExibirComponent } from './components/cadastro/clientes/tipo-pessoa-exibir/tipo-pessoa-exibir.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoRapidoIndex,
    ProdutoIndex,
    ProdutoEditar,
    ProdutoCadastrar,
    VendaIndex,
    VendaEditar,
    CategoriaIndex,
    MarcaIndex,
    IntegracaoFiscalIndex,
    IntegracaofiscalDetalhes,
    IntegracaoFiscalCadastrar,
    IntegracaoFiscalEditar,
    CategoriasCriarComponent,
    CategoriasModificarComponent,
    MarcasCriarComponent,
    MarcasModificarComponent,
    TipoprodutoModificarComponent,
    TipoprodutoCriarComponent,
    NCMIndex,
    NCMEditar,
    NCMCadastrar,
    MovimentaoEstoqueIndex,
    VendaCadastrar,
    ClientesExibirComponent,
    VendedoresExibirComponent,
    TipooperacoesExibirComponent,
    TransportadoraExibirComponent,
    FormaspagamentoExibirComponent,
    CompraIndex,
    CompraCadastrar,
    CompraEditar,
    EmpresasIndex,
    EmpresasCadastrar,
    EmpresasEditar,
    GrupoExibirComponent,
    RegimetributarioExibirComponent,
    EstadoExibirComponent,
    MunicipioExibirComponent,
    GrupoEmpresasIndex,
    GrupoEmpresasCadastrar,
    GrupoEmpresasEditar,
    AcessorapidoComponent,
    ClientesIndex,
    ClientesEditar,
    ClientesCadastrar,
    FornecedoresIndex,
    FornecedoresEditar,
    FornecedoresCadastrar,
    ContasReceberIndex,
    ContasPagarIndex,
    NCMDetalhes,
    FornecedorExibirComponent,
    TipooperacaoCompraExibirComponent,
    TransportadoraCompraExibirComponent,
    CompradorCompraExibirComponent,
    TipoPessoaExibirComponent,
    FormasPagamentoIndex,
    FormasPagamentoCadastrar,
    FormasPagamentoEditar,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
