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

  listaMenus: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterMenus().then((data: any) => {
      this.listaMenus = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirMenus(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/sistema/menus/cadastrar/';
  }

  editar(id: any) {
    location.href = '/sistema/menus/editar/' + id;
  }
}
