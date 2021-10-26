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

  listaClientes: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterTodosDadosClientes().then((data: any) => {
      this.listaClientes = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    /* this._api.excluirEmpresa(index); */
    location.reload();
  }

  cadastrar() {
    location.href = '/cadastro/clientes/cadastrar/';
  }

  editar(id: any) {
    location.href = '/cadastro/clientes/editar/' + id;
  }
}
