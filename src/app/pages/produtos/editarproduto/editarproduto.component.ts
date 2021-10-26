import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-editarproduto',
  templateUrl: './editarproduto.component.html',
  styleUrls: ['./editarproduto.component.scss'],
})
export class EditarprodutoComponent implements OnInit {
  produtoDados: any;
  produtoMovimento: any;
  unidadesDeMedida: any;
  categorias: any;
  marcas: any;
  origemProdutos: any;
  ncms: any;
  integracaofiscal: any;

  faEye = faEye;

  imageBinding = 'assets/semimagem.jpg';

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    await this._api.obterDadosMovimentacaoEstoquePeloID(id).then((data) => {
      this.produtoMovimento = data;
    });
    await this._api.obterDadosProdutosPeloID(id).then((data) => {
      this.produtoDados = data;
    });

    let categoriaDados = await this._api.obterDadosCategoriasProdutos();
    this.categorias = categoriaDados;

    let marcaDados = await this._api.obterDadosMarcaProdutos();
    this.marcas = marcaDados;

    let ncmDados = await this._api.obterDadosNCMProdutos();
    this.ncms = ncmDados;

    let iFDados = await this._api.obterDadosIntegracaoFiscalProdutos();
    this.integracaofiscal = iFDados;

    console.log(this.produtoDados);
  }

  async adicionarImagem(data: any) {
    this.toBase64(data.files[0]);
  }

  obterDetalhes(vendaID: any) {
    this._api.obterDadosVendaProdutosByVendaID(vendaID).then((data: any) => {
      let x = data[0];

      location.href = `vendas/editar/${x.vendaID}`;
    });
  }

  async onSubmit(data: any) {
    if (data.imagem[0] == '/') {
      data.imagem = data.imagem.replace(/^data:image\/[a-z]+;base64,/, '');
    } else {
      delete data.imagem;
      delete data.imagem;
    }

    console.log(this.produtoDados);
    console.log(data);

    this._api.modificarProduto(data).then((res) => {
      console.log(res);
    });
  }

  //TODO:BASE64CONVERT//
  toBase64(file: File) {
    const obs = new Observable((sub: Subscriber<any>) => {
      this.readFile(file, sub);
    });
    obs.subscribe((d) => {
      d = d.replace(/^data:image\/[a-z]+;base64,/, '');
      this.imageBinding = d;
      this.produtoDados.imagem = d;
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
