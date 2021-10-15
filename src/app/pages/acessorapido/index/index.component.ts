import { Component, OnInit } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  itemProdutos: any = {
    nome: 'Produtos',
    descricao: 'Acompanhe informações úteis sobre o estoque de produtos',
    url: 'produtos',
  };

  itemVendas: any = {
    nome: 'Vendas',
    descricao: 'Registro de todas as entradas e saidas de produtos',
    url: 'vendas',
  };

  itemCategorias: any = {
    nome: 'Categorias',
    descricao: 'Adicione, remova e edite as categorias do projeto',
    url: 'cadastro/categorias',
  };

  itemMarcas: any = {
    nome: 'Marcas',
    descricao: 'Adicione, remova e edite as marcas do projeto',
    url: 'cadastro/marcas',
  };

  itemIntegracaoFiscal: any = {
    nome: 'Integração Fiscal',
    descricao: 'Adicione, remova e edite as integrações fiscais do projeto',
    url: 'cadastro/integracaofiscal',
  };

  itemNcm: any = {
    nome: 'NCM',
    descricao: 'Adicione, remova e edite os ncms do projeto',
    url: 'cadastro/ncm',
  };

  itemDashboard: any = [
    {
      nome: 'Vendas',
      descricao: 'Desc',
      url: 'dashboard/vendas',
    },

    {
      nome: 'Compras',
      descricao: 'Desc',
      url: 'dashboard/compras',
    },

    {
      nome: 'Estoque',
      descricao: 'Desc',
      url: 'dashboard/estoque',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
