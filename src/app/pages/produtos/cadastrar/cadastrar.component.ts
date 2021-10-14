import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  categorias: any;
  marcas: any;
  origemProdutos: any;
  ncms: any;

  imageBinding = '../../../../../assets/semimagem.jpg';

  constructor(
    private _api: ZipincloudService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    let categoriaDados = await this._api.obterDadosCategoriasProdutos();
    this.categorias = categoriaDados;

    let marcaDados = await this._api.obterDadosMarcaProdutos();
    this.marcas = marcaDados;

    let ncmDados = await this._api.obterDadosNCMProdutos();
    this.ncms = ncmDados;
  }

  adicionarImagem(data: any) {
    let imageUrl = window.URL.createObjectURL(data.files[0]);
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(
      imageUrl
    ) as string;
    this.imageBinding = sanitizedUrl;
  }

  async onSubmit(data: any) {
    console.log(data);
    data.Ativo == '' ? (data.Ativo = false) : (data.Ativo = data.Ativo);
    data.ParaVender == ''
      ? (data.ParaVender = false)
      : (data.ParaVender = data.ParaVender);
    data.EstoqueNegativo == ''
      ? (data.EstoqueNegativo = false)
      : (data.EstoqueNegativo = data.EstoqueNegativo);

    data.EstoqueMaximo == '' ? (data.EstoqueMaximo = 0) : '';
    data.EstoqueMinimo == '' ? (data.EstoqueMinimo = 0) : '';
    data.PesoBruto == '' ? (data.PesoBruto = 0) : '';
    data.PesoLiquido == '' ? (data.PesoLiquido = 0) : '';
    data.SaldoEstoque == '' ? (data.SaldoEstoque = 0) : '';
    data.ValorCompra == '' ? (data.ValorCompra = 0) : '';
    data.ValorVenda == '' ? (data.ValorVenda = 0) : '';
    data.ValorVendaPrazo == '' ? (data.ValorVendaPrazo = 0) : '';

    await this._api.salvarProduto(data);
  }
}
