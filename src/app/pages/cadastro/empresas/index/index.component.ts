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

  listaEmpresas: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterEmpresa().then((data: any) => {
      this.listaEmpresas = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirEmpresa(index).then(() => {
      location.reload();
    });
  }

  cadastrar() {
    location.href = '/cadastro/empresas/cadastrar/';
  }

  editar(id: any) {
    location.href = '/cadastro/empresas/editar/' + id;
  }
}
