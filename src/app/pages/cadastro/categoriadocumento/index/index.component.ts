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

  listaCategoriaDocumentos: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterCategoriaDocumentos().then((data: any) => {
      this.listaCategoriaDocumentos = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirCategoriaDocumentos(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/cadastro/categoriadocumentos/cadastrar/';
  }

  editar(id: any) {
    location.href = '/cadastro/categoriadocumentos/editar/' + id;
  }
}
