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
    path: 'movimentacaoestoque',
    component: MovimentaoEstoqueIndex,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
