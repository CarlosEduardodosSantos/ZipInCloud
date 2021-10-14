import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent as ProdutoIndex } from './pages/produtos/index/index.component';
import { IndexComponent as AcessoRapidoIndex } from './pages/acessorapido/index/index.component';
import { IndexComponent as VendaIndex } from './pages/vendas/index/index.component';

import { EditarprodutoComponent } from './pages/produtos/editarproduto/editarproduto.component';
import { CadastrarComponent } from './pages/produtos/cadastrar/cadastrar.component';
import { DetalhesComponent } from './pages/vendas/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: AcessoRapidoIndex },
  { path: 'produtos', component: ProdutoIndex },
  { path: 'acessorapido', component: AcessoRapidoIndex },
  { path: 'produtos/editar/:id', component: EditarprodutoComponent },
  { path: 'produtos/cadastrar', component: CadastrarComponent },
  { path: 'vendas', component: VendaIndex },
  { path: 'vendas/detalhes/:id/:initialRoute', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
