import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
})
export class CertificadosComponent implements OnInit {
  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  listaCertificados: any;
  empresaID: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.empresaID = id;

    await this._api.obterEmpresaCertificadoByID(id).then((data: any) => {
      this.listaCertificados = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirEmpresaCertificado(index).then(() => {
      location.reload();
    });
  }

  cadastrar(id: any) {
    location.href = '/cadastro/empresas/certificados/cadastrar/' + id;
  }

  editar(id: any) {
    location.href = '/cadastro/empresas/certificados/editar/' + id;
  }
}
