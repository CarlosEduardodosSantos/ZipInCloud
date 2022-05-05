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
import { CertificadosComponent as EmpresasCertificadosIndex } from './pages/cadastro/empresas/certificados/index/certificados.component';
import { EditarComponent as EmpresasCertificadosEditar } from './pages/cadastro/empresas/certificados/editar/editar.component';
import { CadastroComponent as EmpresasCertificadosCadastrar } from './pages/cadastro/empresas/certificados/cadastro/cadastro.component';
import { EditarComponent as CertificadosEditar } from './pages/cadastro/empresas/certificados/editar/editar.component';
import { CadastroComponent as CertificadosCadastrar } from './pages/cadastro/empresas/certificados/cadastro/cadastro.component';
import { IndexComponent as GrupoEmpresasIndex } from './pages/cadastro/grupoempresa/index/index.component';
import { CadastroComponent as GrupoEmpresasCadastrar } from './pages/cadastro/grupoempresa/cadastro/cadastro.component';
import { EditarComponent as GrupoEmpresasEditar } from './pages/cadastro/grupoempresa/editar/editar.component';
import { IndexComponent as ClientesIndex } from './pages/cadastro/clientes/index/index.component';
import { EditarComponent as ClientesEditar } from './pages/cadastro/clientes/editar/editar.component';
import { CadastrarComponent as ClientesCadastrar } from './pages/cadastro/clientes/cadastrar/cadastrar.component';
import { IndexComponent as FormasPagamentoIndex } from './pages/cadastro/formaspagamento/index/index.component';
import { CadastroComponent as FormasPagamentoCadastrar } from './pages/cadastro/formaspagamento/cadastro/cadastro.component';
import { EditarComponent as FormasPagamentoEditar } from './pages/cadastro/formaspagamento/editar/editar.component';
import { IndexComponent as CategoriaDocumentoIndex } from './pages/cadastro/categoriadocumento/index/index.component';
import { EditarComponent as CategoriaDocumentoEditar } from './pages/cadastro/categoriadocumento/editar/editar.component';
import { CadastrarComponent as CategoriaDocumentoCadastrar } from './pages/cadastro/categoriadocumento/cadastrar/cadastrar.component';
import { IndexComponent as CaixaIndex } from './pages/caixas/index/index.component';
import { EditarComponent as CaixaEditar } from './pages/caixas/editar/editar.component';
import { CadastrarComponent as CaixaCadastrar } from './pages/caixas/cadastrar/cadastrar.component';
import { IndexComponent as MenusIndex } from './pages/sistema/menus/index/index.component';
import { EditarComponent as MenusEditar } from './pages/sistema/menus/editar/editar.component';
import { CadastrarComponent as MenusCadastrar } from './pages/sistema/menus/cadastrar/cadastrar.component';
import { IndexComponent as MenusItemsIndex } from './pages/sistema/menusitems/index/index.component';
import { EditarComponent as MenusItemsEditar } from './pages/sistema/menusitems/editar/editar.component';
import { CadastrarComponent as MenusItemsCadastrar } from './pages/sistema/menusitems/cadastrar/cadastrar.component';
import { IndexComponent as ConfiguracoesPerfilUsuarioIndex } from './pages/configuracoes/perfildeusuario/index/index.component';
import { CadastrarComponent as ConfiguracoesPerfilUsuarioCadastrar } from './pages/configuracoes/perfildeusuario/cadastrar/cadastrar.component';
import { EditarComponent as ConfiguracoesPerfilUsuarioEditar } from './pages/configuracoes/perfildeusuario/editar/editar.component';
import { CadastrarComponent as ConfiguracoesAcessosCadastrar } from './pages/configuracoes/acessos/cadastrar/cadastrar.component';
import { EditarComponent as ConfiguracoesAcessosEditar } from './pages/configuracoes/acessos/editar/editar.component';
import { IndexComponent as ConfiguracoesAcessosIndex } from './pages/configuracoes/acessos/index/index.component';
import { IndexComponent as CfopIndex } from './pages/cadastro/cfop/index/index.component';
import { EditarComponent as CfopEditar } from './pages/cadastro/cfop/editar/editar.component';
import { CadastrarComponent as CfopCadastrar } from './pages/cadastro/cfop/cadastrar/cadastrar.component';
import { IndexComponent as DocumentoPagarIndex } from './pages/documento/pagar/index/index.component';
import { EditarComponent as DocumentoPagarEditar } from './pages/documento/pagar/editar/editar.component';
import { CadastrarComponent as DocumentoPagarCadastrar } from './pages/documento/pagar/cadastrar/cadastrar.component';
import { IndexComponent as DocumentoReceberIndex } from './pages/documento/receber/index/index.component';
import { EditarComponent as DocumentoReceberEditar } from './pages/documento/receber/editar/editar.component';
import { CadastrarComponent as DocumentoReceberCadastrar } from './pages/documento/receber/cadastrar/cadastrar.component';
import { IndexComponent as DashboardVendasIndex } from './pages/dashboard/venda/index/index.component';
import { IndexComponent as DashboardComprasIndex } from './pages/dashboard/compras/index/index.component';
import { IndexComponent as DashboardEstoqueIndex } from './pages/dashboard/estoque/index/index.component';
import { IndexComponent as DashboardContasReceberIndex } from './pages/dashboard/contasreceber/index/index.component';
import { IndexComponent as DashboardContasPagarIndex } from './pages/dashboard/contaspagar/index/index.component';
import { IndexComponent as DashboardFiscalIndex } from './pages/dashboard/fiscal/index/index.component';
import { IndexComponent as NFeParametrosIndex } from './pages/nfe/parametros/index/index.component';
import { EditarComponent as NFeParametrosEditar } from './pages/nfe/parametros/editar/editar.component';
import { CadastrarComponent as NFeParametrosCadastrar } from './pages/nfe/parametros/cadastrar/cadastrar.component';
import { AplicacaoComponent as IntegracaoFiscalAplicacao } from './pages/cadastro/integracaofiscal/aplicacao/aplicacao.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HighchartsChartModule } from 'highcharts-angular';

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
import { EnderecoCriarComponent } from './components/cadastro/endereco-criar/endereco-criar.component';

@NgModule({
  declarations: [
    AppComponent,
    //Pages
    AcessoRapidoIndex,
    ProdutoIndex,
    ProdutoEditar,
    ProdutoCadastrar,
    VendaIndex,
    VendaEditar,
    VendaCadastrar,
    CategoriaIndex,
    MarcaIndex,
    IntegracaoFiscalIndex,
    IntegracaofiscalDetalhes,
    IntegracaoFiscalCadastrar,
    IntegracaoFiscalEditar,
    NCMIndex,
    NCMEditar,
    NCMCadastrar,
    NCMDetalhes,
    MovimentaoEstoqueIndex,
    CompraIndex,
    CompraCadastrar,
    CompraEditar,
    EmpresasIndex,
    EmpresasCadastrar,
    EmpresasEditar,
    EmpresasCertificadosIndex,
    EmpresasCertificadosEditar,
    EmpresasCertificadosCadastrar,
    CertificadosEditar,
    CertificadosCadastrar,
    GrupoEmpresasIndex,
    GrupoEmpresasCadastrar,
    GrupoEmpresasEditar,
    ClientesIndex,
    ClientesEditar,
    ClientesCadastrar,
    FormasPagamentoIndex,
    FormasPagamentoCadastrar,
    FormasPagamentoEditar,
    CategoriaDocumentoIndex,
    CategoriaDocumentoEditar,
    CategoriaDocumentoCadastrar,
    CaixaIndex,
    CaixaEditar,
    CaixaCadastrar,
    MenusIndex,
    MenusEditar,
    MenusCadastrar,
    MenusItemsIndex,
    MenusItemsEditar,
    MenusItemsCadastrar,
    ConfiguracoesPerfilUsuarioIndex,
    ConfiguracoesPerfilUsuarioCadastrar,
    ConfiguracoesPerfilUsuarioEditar,
    ConfiguracoesAcessosCadastrar,
    ConfiguracoesAcessosEditar,
    ConfiguracoesAcessosIndex,
    CfopIndex,
    CfopEditar,
    CfopCadastrar,
    DocumentoPagarIndex,
    DocumentoPagarEditar,
    DocumentoPagarCadastrar,
    DocumentoReceberIndex,
    DocumentoReceberEditar,
    DocumentoReceberCadastrar,
    DashboardVendasIndex,
    DashboardComprasIndex,
    DashboardEstoqueIndex,
    DashboardContasReceberIndex,
    DashboardContasPagarIndex,
    DashboardFiscalIndex,
    NFeParametrosIndex,
    NFeParametrosEditar,
    NFeParametrosCadastrar,
    IntegracaoFiscalAplicacao,

    //Componentes
    CategoriasCriarComponent,
    CategoriasModificarComponent,
    MarcasCriarComponent,
    MarcasModificarComponent,
    TipoprodutoModificarComponent,
    TipoprodutoCriarComponent,
    ClientesExibirComponent,
    VendedoresExibirComponent,
    TipooperacoesExibirComponent,
    TransportadoraExibirComponent,
    FormaspagamentoExibirComponent,
    GrupoExibirComponent,
    RegimetributarioExibirComponent,
    EstadoExibirComponent,
    MunicipioExibirComponent,
    AcessorapidoComponent,
    FornecedorExibirComponent,
    TipooperacaoCompraExibirComponent,
    TransportadoraCompraExibirComponent,
    CompradorCompraExibirComponent,
    EnderecoCriarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HighchartsChartModule,
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
