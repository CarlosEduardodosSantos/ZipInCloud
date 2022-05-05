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

  listaPerfilUsuarioAcesso: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterPerfilUsuarioAcesso().then((data: any) => {
      this.listaPerfilUsuarioAcesso = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirPerfilUsuarioAcesso(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/configuracoes/acessos/cadastrar/';
  }

  editar(id: any) {
    location.href = '/configuracoes/acessos/editar/' + id;
  }
}
