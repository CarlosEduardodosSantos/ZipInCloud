import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  pessoasItems = [
    {
      nome: 'Clientes',
      url: 'cadastro/clientes',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Compradores',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Contadores',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Contatos',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Endereços',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Fornecedores',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Funcionários',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
    {
      nome: 'Motoristas',
      url: 'cadastro/fornecedores',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro fornecedores',
    },
  ];

  cadastroItems = [
    {
      nome: 'Empresas',
      url: 'cadastro/empresas',
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
      nome: 'Movimentação de Estoque',
      url: 'movimentacao/estoque',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem produtos',
    },
    {
      nome: 'Grupo de Empresas',
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
      nome: 'Marcas',
      url: 'cadastro/marcas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro marcas',
    },
    {
      nome: 'Integrações Fiscais',
      url: 'cadastro/integracaofiscal',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro integracão fiscal',
    },
    {
      nome: 'NCMs',
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
    {
      nome: 'Categorias de Documentos',
      url: 'cadastro/categoriadocumentos',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro categoria de documentos',
    },
    {
      nome: 'Cfop',
      url: 'cadastro/cfop',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem cadastro cfop',
    },
  ];

  comercialItems = [
    {
      nome: 'Pedidos de Venda',
      url: 'vendas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem pedido de vendas da empresas',
    },
    {
      nome: 'Pedidos de Compra',
      url: 'compra',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem pedido de compra da empresas',
    },
    {
      nome: 'Contas a Receber',
      url: 'contas/receber',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem contas a receber',
    },
    {
      nome: 'Contas a Pagar',
      url: 'contas/pagar',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem contas a pagar',
    },
  ];

  pdvItems = [
    {
      nome: 'Caixas',
      url: 'caixa',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem caixas',
    },
  ];

  menuItems = [
    {
      nome: 'Menu Items',
      url: 'sistema/menusitems',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem menus items',
    },
    {
      nome: 'Menu Items',
      url: 'sistema/menusitems',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem menus items',
    },
  ];

  configuracoesItems = [
    {
      nome: 'Perfil de Usuários',
      url: 'configuracoes/perfilusuario',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem menus items',
    },
  ];

  dashboardItems = [
    {
      nome: 'Dashboard Vendas',
      url: 'dashboard/vendas',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem menus items',
    },
    {
      nome: 'Dashboard Compras',
      url: 'dashboard/compras',
      imageUrl: '../../../../assets/acessorapido/a.png',
      imageAlt: 'Imagem menus items',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
