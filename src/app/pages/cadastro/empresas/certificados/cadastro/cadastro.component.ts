import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  id: any;

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async onSubmit(data: any) {
    /* data.EmpresaID = this.id; */
    console.log(this.id);
    console.log(data);

    await this._api.salvarEmpresaCertificado(data);
  }

  retornar(id: any) {
    location.href = '/cadastro/empresas/certificados/' + id;
  }
}
