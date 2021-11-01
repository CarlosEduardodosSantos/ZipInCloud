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

  listaParametrosNFe: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterParametrosNFe().then((data: any) => {
      this.listaParametrosNFe = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirParametrosNFe(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/nfe/parametros/cadastrar';
  }

  editar(id: any) {
    location.href = '/nfe/parametros/editar/' + id;
  }
}
