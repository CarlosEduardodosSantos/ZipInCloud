import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  dadosAnteriores: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    await this._api.obterEmpresaCertificadoByIDOne(id).then((data: any) => {
      this.dadosAnteriores = data;
      console.log(data);
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarEmpresaCertificado(data);
  }

  retornar(id: any) {
    location.href = '/cadastro/empresas/certificados/' + id;
  }
}
