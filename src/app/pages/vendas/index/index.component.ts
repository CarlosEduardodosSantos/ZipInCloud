import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  listavendas: any[] = [];

  faEye = faEye;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    let data = await this._api.obterDadosVendaProdutos();

    this.listavendas = data;
    console.log(this.listavendas);
  }

  obterDetalhes(vendaItemID: any) {
    location.href = `vendas/detalhes/${vendaItemID}/1`;
  }
}
