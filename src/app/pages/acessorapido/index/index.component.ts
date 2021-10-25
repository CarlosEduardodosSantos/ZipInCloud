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
  ];

  constructor() {}

  ngOnInit(): void {}
}
