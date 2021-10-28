import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listaCaixas: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterCaixas().then((data: any) => {
      this.listaCaixas = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirCaixas(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/caixa/cadastrar/';
  }

  editar(id: any) {
    location.href = '/caixa/editar/' + id;
  }
}
