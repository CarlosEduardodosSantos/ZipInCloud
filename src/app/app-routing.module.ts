import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: AcessoRapidoIndex,
  },
  {
    path: 'produtos',
    component: ProdutoIndex,
  },
  {
    path: 'acessorapido',
    component: AcessoRapidoIndex,
  },
  {
    path: 'produtos/editar/:id',
    component: ProdutoEditar,
  },
  {
    path: 'produtos/cadastrar',
    component: ProdutoCadastrar,
  },
  {
    path: 'vendas',
    component: VendaIndex,
  },
  {
    path: 'vendas/editar/:id',
    component: VendaEditar,
  },
  {
    path: 'vendas/cadastrar',
    component: VendaCadastrar,
  },
  {
    path: 'compra',
    component: CompraIndex,
  },
  {
    path: 'compra/editar/:id',
    component: CompraEditar,
  },
  {
    path: 'movimentacaoestoque',
    component: MovimentaoEstoqueIndex,
  },
  {
    path: 'compra/cadastrar',
    component: CompraCadastrar,
  },
  {
    path: 'cadastro/empresas',
    component: EmpresasIndex,
  },
  {
    path: 'cadastro/empresas/editar/:id',
    component: EmpresasEditar,
  },
  {
    path: 'cadastro/empresas/cadastrar',
    component: EmpresasCadastrar,
  },
  {
    path: 'cadastro/empresas/certificados/:id',
    component: EmpresasCertificadosIndex,
  },
  {
    path: 'cadastro/empresas/certificados/editar/:id',
    component: EmpresasCertificadosEditar,
  },
  {
    path: 'cadastro/empresas/certificados/cadastrar/:id',
    component: EmpresasCertificadosCadastrar,
  },
  {
    path: 'cadastro/grupoempresas',
    component: GrupoEmpresasIndex,
  },
  {
    path: 'cadastro/grupoempresas/cadastrar',
    component: GrupoEmpresasCadastrar,
  },
  {
    path: 'cadastro/grupoempresas/editar/:id',
    component: GrupoEmpresasEditar,
  },
  {
    path: 'cadastro/categorias',
    component: CategoriaIndex,
  },
  {
    path: 'cadastro/marcas',
    component: MarcaIndex,
  },
  {
    path: 'cadastro/integracaofiscal',
    component: IntegracaoFiscalIndex,
  },
  {
    path: 'cadastro/integracaofiscal/detalhes/:id',
    component: IntegracaofiscalDetalhes,
  },
  {
    path: 'cadastro/integracaofiscal/editar/:id',
    component: IntegracaoFiscalEditar,
  },
  {
    path: 'cadastro/integracaofiscal/cadastrar',
    component: IntegracaoFiscalCadastrar,
  },
  {
    path: 'cadastro/ncm',
    component: NCMIndex,
  },
  {
    path: 'cadastro/ncm/cadastrar',
    component: NCMCadastrar,
  },
  {
    path: 'cadastro/ncm/editar/:id',
    component: NCMEditar,
  },
  {
    path: 'cadastro/ncm/detalhes/:id',
    component: NCMDetalhes,
  },
  {
    path: 'cadastro/clientes',
    component: ClientesIndex,
  },
  {
    path: 'cadastro/clientes/cadastrar',
    component: ClientesCadastrar,
  },
  {
    path: 'cadastro/clientes/editar/:id',
    component: ClientesEditar,
  },
  {
    path: 'cadastro/fornecedores',
    component: FornecedoresIndex,
  },
  {
    path: 'cadastro/fornecedores/cadastrar',
    component: FornecedoresCadastrar,
  },
  {
    path: 'cadastro/fornecedores/editar/:id',
    component: FornecedoresEditar,
  },
  {
    path: 'cadastro/formaspagamento',
    component: FormasPagamentoIndex,
  },
  {
    path: 'cadastro/formaspagamento/cadastrar',
    component: FormasPagamentoCadastrar,
  },
  {
    path: 'cadastro/formaspagamento/editar/:id',
    component: FormasPagamentoEditar,
  },
  {
    path: 'cadastro/categoriadocumentos',
    component: CategoriaDocumentoIndex,
  },
  {
    path: 'cadastro/categoriadocumentos/cadastrar',
    component: CategoriaDocumentoCadastrar,
  },
  {
    path: 'cadastro/categoriadocumentos/editar/:id',
    component: CategoriaDocumentoEditar,
  },
  {
    path: 'contas/receber',
    component: ContasReceberIndex,
  },
  {
    path: 'contas/pagar',
    component: ContasPagarIndex,
  },
  {
    path: 'caixa',
    component: CaixaIndex,
  },
  {
    path: 'caixa/cadastrar',
    component: CaixaCadastrar,
  },
  {
    path: 'caixa/editar/:id',
    component: CaixaEditar,
  },
  {
    path: 'sistema/menus',
    component: MenusIndex,
  },
  {
    path: 'sistema/menus/cadastrar',
    component: MenusCadastrar,
  },
  {
    path: 'sistema/menus/editar/:id',
    component: MenusEditar,
  },
  {
    path: 'sistema/menusitems',
    component: MenusItemsIndex,
  },
  {
    path: 'sistema/menusitems/cadastrar',
    component: MenusItemsCadastrar,
  },
  {
    path: 'sistema/menusitems/editar/:id',
    component: MenusItemsEditar,
  },
  {
    path: 'configuracoes/perfilusuario',
    component: ConfiguracoesPerfilUsuarioIndex,
  },
  {
    path: 'configuracoes/perfilusuario/cadastrar',
    component: ConfiguracoesPerfilUsuarioIndex,
  },
  {
    path: 'configuracoes/perfilusuario/editar/:id',
    component: ConfiguracoesPerfilUsuarioIndex,
  },
  {
    path: 'cadastro/cfop',
    component: CfopIndex,
  },
  {
    path: 'cadastro/cfop/cadastrar',
    component: CfopCadastrar,
  },
  {
    path: 'cadastro/cfop/editar/:id',
    component: CfopEditar,
  },
  {
    path: 'documento/pagar',
    component: DocumentoPagarIndex,
  },
  {
    path: 'documento/pagar/cadastrar',
    component: DocumentoPagarCadastrar,
  },
  {
    path: 'documento/pagar/editar/:id',
    component: DocumentoPagarEditar,
  },
  {
    path: 'documento/receber',
    component: DocumentoReceberIndex,
  },
  {
    path: 'documento/receber/cadastrar',
    component: DocumentoReceberCadastrar,
  },
  {
    path: 'documento/receber/editar/:id',
    component: DocumentoReceberEditar,
  },
  {
    path: 'dashboard/vendas',
    component: DashboardVendasIndex,
  },
  {
    path: 'dashboard/compras',
    component: DashboardComprasIndex,
  },
  {
    path: 'dashboard/estoque',
    component: DashboardEstoqueIndex,
  },
  {
    path: 'dashboard/contaspagar',
    component: DashboardContasPagarIndex,
  },
  {
    path: 'dashboard/contasreceber',
    component: DashboardContasReceberIndex,
  },
  {
    path: 'dashboard/fiscal',
    component: DashboardFiscalIndex,
  },
  {
    path: 'nfe/parametros',
    component: NFeParametrosIndex,
  },
  {
    path: 'nfe/parametros/editar/:id',
    component: NFeParametrosEditar,
  },
  {
    path: 'nfe/parametros/cadastrar',
    component: NFeParametrosCadastrar,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
