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

  listaMenusItems: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterMenusItems().then((data) => {
      this.listaMenusItems = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirMenusItems(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/sistema/menusitems/cadastrar/';
  }

  editar(id: any) {
    location.href = '/sistema/menusitems/editar/' + id;
  }
}
