import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  idGrupoEmpresa: any;
  grupoEmpresaDados: any;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {}

  async onSubmit(data: any) {
    console.log(data);

    await this._api.salvarGrupoEmpresa(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/cadastro/grupoempresas';
  }
}
