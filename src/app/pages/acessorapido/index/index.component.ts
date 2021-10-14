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
