import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { Observable, Subscriber } from 'rxjs';

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
  integracaofiscal: any;

  imageBinding = '../../../../../assets/semimagem.jpg';

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    let categoriaDados = await this._api.obterDadosCategoriasProdutos();
    this.categorias = categoriaDados;

    let marcaDados = await this._api.obterDadosMarcaProdutos();
    this.marcas = marcaDados;

    let ncmDados = await this._api.obterDadosNCMProdutos();
    this.ncms = ncmDados;

    let iFDados = await this._api.obterDadosIntegracaoFiscalProdutos();
    this.integracaofiscal = iFDados;
  }

  adicionarImagem(data: any) {
    this.toBase64(data.files[0]);
  }

  async onSubmit(data: any) {
    console.log(data);

    data.imagem = data.imagem.replace(/^data:image\/[a-z]+;base64,/, '');
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
    data.CategoriaID == '' ? (data.CategoriaID = 0) : 1;
    data.MarcaID == '' ? (data.MarcaID = 0) : 1;
    data.ProdutoIntegracaoFiscalID == ''
      ? (data.ProdutoIntegracaoFiscalID = 0)
      : 1;
    data.NcmID == '' ? (data.NcmID = 0) : 1;
    data.OrigemID == '' ? (data.OrigemID = 0) : 1;

    data.imagem = data.imagem.replace(/^data:image\/[a-z]+;base64,/, '');
    data.imagem[0] != '/' ? delete data.imagem : '';

    await this._api.salvarProduto(data);
  }

  //TODO:BASE64CONVERT//
  toBase64(file: File) {
    const obs = new Observable((sub: Subscriber<any>) => {
      this.readFile(file, sub);
    });
    obs.subscribe((d) => {
      this.imageBinding = d;
    });
  }

  readFile(file: File, sub: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      sub.next(filereader.result);
      sub.complete();
    };
    filereader.onerror = (err: any) => {
      sub.error(err);
      sub.complete();
    };
  }
}
