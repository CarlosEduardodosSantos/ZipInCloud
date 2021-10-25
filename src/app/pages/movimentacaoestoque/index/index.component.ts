import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { Subject } from 'rxjs';

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
    let data = await this._api.obterDadosMovimentacaoEstoque();

    /* this.listavendas = data; */
    console.log(this.listavendas);
  }

  obterDetalhes(vendaID: any) {
    location.href = `vendas/detalhes/${vendaID}/1`;
  }
}
