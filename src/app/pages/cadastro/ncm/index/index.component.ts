import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listancm: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  detalheslista: any;

  async ngOnInit() {
    let data = await this._api.obterDadosNCMProdutos();

    this.listancm = data;
    console.log(this.listancm);
  }

  excluirElemento(index: number) {
    this._api.excluirNcm(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/cadastro/ncm/cadastrar/';
  }

  dadosespecificos(id: number) {
    location.href = '/cadastro/ncm/detalhes/' + id;
  }

  editar(id: any) {
    location.href = '/cadastro/ncm/editar/' + id;
  }
}
