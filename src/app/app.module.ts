import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent as AcessoRapidoIndex } from './pages/acessorapido/index/index.component';
import { IndexComponent as ProdutoIndex } from './pages/produtos/index/index.component';
import { IndexComponent as VendaIndex } from './pages/vendas/index/index.component';
import { EditarprodutoComponent } from './pages/produtos/editarproduto/editarproduto.component';
import { CadastrarComponent } from './pages/produtos/cadastrar/cadastrar.component';
import { DetalhesComponent } from './pages/vendas/detalhes/detalhes.component';
import { CategoriasComponent } from './pages/cadastro/categorias/categorias.component';
import { UnidadesdemedidaComponent } from './pages/cadastro/unidadesdemedida/unidadesdemedida.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AcessoRapidoIndex,
    ProdutoIndex,
    VendaIndex,
    EditarprodutoComponent,
    DetalhesComponent,
    CadastrarComponent,
    CategoriasComponent,
    UnidadesdemedidaComponent,
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
