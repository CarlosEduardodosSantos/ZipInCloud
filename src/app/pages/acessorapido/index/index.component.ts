import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  cadastroItems = [
    {
      nome: 'Empresas',
      url: 'cadastro/empresas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro empresas',
    },
    {
      nome: 'Clientes',
      url: 'cadastro/clientes',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro empresas',
    },
    {
      nome: 'Produtos',
      url: 'produtos',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem produtos',
    },
    {
      nome: 'Fornecedores',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Vendedores',
      url: 'cadastro/vendedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro vendedores',
    },
    {
      nome: 'Transportadora',
      url: 'cadastro/transportadora',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro transportadora',
    },
    {
      nome: 'Grupo de empresas',
      url: 'cadastro/grupoempresas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro grupo de empresas',
    },
    {
      nome: 'Categorias',
      url: 'cadastro/categorias',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro categorias',
    },
    {
      nome: 'Marca',
      url: 'cadastro/marcas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro marcas',
    },
    {
      nome: 'Integração fiscal',
      url: 'cadastro/integracaofiscal',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro integracão fiscal',
    },
    {
      nome: 'NCM',
      url: 'cadastro/ncm',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro ncm',
    },
    {
      nome: 'Formas de Pagamentos',
      url: 'cadastro/formaspagamento',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro formas de pagamento',
    },
  ];

  comercialItems = [
    {
      nome: 'Pedidos de venda',
      url: 'vendas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem pedido de vendas da empresas',
    },
    {
      nome: 'Pedidos de compra',
      url: 'compra',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem pedido de compra da empresas',
    },
    {
      nome: 'Contas a receber',
      url: 'contas/receber',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem contas a receber',
    },
    {
      nome: 'Contas a pagar',
      url: 'contas/pagar',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem contas a pagar',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
