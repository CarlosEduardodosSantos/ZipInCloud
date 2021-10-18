import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent as AcessoRapidoIndex } from './pages/acessorapido/index/index.component';

import { IndexComponent as ProdutoIndex } from './pages/produtos/index/index.component';
import { EditarprodutoComponent as ProdutoEditar } from './pages/produtos/editarproduto/editarproduto.component';
import { CadastrarComponent as ProdutoCadastrar } from './pages/produtos/cadastrar/cadastrar.component';

import { IndexComponent as VendaIndex } from './pages/vendas/index/index.component';
import { DetalhesComponent as VendaDetalhes } from './pages/vendas/detalhes/detalhes.component';

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

const routes: Routes = [
  { path: '', component: AcessoRapidoIndex },
  { path: 'produtos', component: ProdutoIndex },
  { path: 'acessorapido', component: AcessoRapidoIndex },
  { path: 'produtos/editar/:id', component: ProdutoEditar },
  { path: 'produtos/cadastrar', component: ProdutoCadastrar },
  { path: 'vendas', component: VendaIndex },
  { path: 'vendas/detalhes/:id/:initialRoute', component: VendaDetalhes },
  { path: 'cadastro/categorias', component: CategoriaIndex },
  { path: 'cadastro/marcas', component: MarcaIndex },
  { path: 'cadastro/integracaofiscal', component: IntegracaoFiscalIndex },
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
  { path: 'cadastro/ncm', component: NCMIndex },
  {
    path: 'cadastro/ncm/cadastrar',
    component: NCMCadastrar,
  },
  {
    path: 'cadastro/ncm/editar/:id',
    component: NCMEditar,
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
