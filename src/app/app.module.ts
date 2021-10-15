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
import { DetalhesComponent as VendaDetalhes } from './pages/vendas/detalhes/detalhes.component';
import { CategoriasComponent as CategoriaIndex } from './pages/cadastro/categorias/categorias.component';
import { MarcasComponent as MarcaIndex } from './pages/cadastro/marcas/marcas.component';
import { TipoprodutoComponent as TipoProdutoIndex } from './pages/cadastro/tipoproduto/tipoproduto.component';
import { IntegracaofiscalComponent as IntegracaoFiscalIndex } from './pages/cadastro/integracaofiscal/index/integracaofiscal.component';
import { IntegracaofiscalDetalhesComponent as IntegracaofiscalDetalhes } from './pages/cadastro/integracaofiscal/detalhes/integracaofiscal-detalhes.component';
import { CadastrarComponent as IntegracaoFiscalCadastrar } from './pages/cadastro/integracaofiscal/cadastrar/cadastrar.component';
import { EditarComponent as IntegracaoFiscalEditar } from './pages/cadastro/integracaofiscal/editar/editar.component';
import { IndexComponent as NCMIndex } from './pages/cadastro/ncm/index/index.component';
import { EditarComponent as NCMEditar } from './pages/cadastro/ncm/editar/editar.component';
import { CadastrarComponent as NCMCadastrar } from './pages/cadastro/ncm/cadastrar/cadastrar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
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

@NgModule({
  declarations: [
    AppComponent,
    AcessoRapidoIndex,
    ProdutoIndex,
    ProdutoEditar,
    ProdutoCadastrar,
    VendaIndex,
    VendaDetalhes,
    CategoriaIndex,
    MarcaIndex,
    TipoProdutoIndex,
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
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
