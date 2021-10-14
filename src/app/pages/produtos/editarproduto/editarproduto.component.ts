import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { DomSanitizer } from '@angular/platform-browser';

import { faEye } from '@fortawesome/free-solid-svg-icons';

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

  faEye = faEye;

  imageBinding = '../../../../../assets/semimagem.jpg';

  constructor(
    private route: ActivatedRoute,
    private _api: ZipincloudService,
    private sanitizer: DomSanitizer
  ) {}

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

    console.log(this.produtoDados);
  }

  adicionarImagem(data: any) {
    let imageUrl = window.URL.createObjectURL(data.files[0]);
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(
      imageUrl
    ) as string;
    this.imageBinding = sanitizedUrl;
  }

  obterDetalhes(vendaID: any) {
    location.href = `vendas/detalhes/${vendaID}/2`;
  }

  onSubmit(data: any) {
    console.log(data);
    this._api.modificarProduto(data);
  }
}
