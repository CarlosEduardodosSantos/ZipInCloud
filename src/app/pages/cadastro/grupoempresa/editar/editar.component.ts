import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  idGrupoEmpresa: any;
  grupoEmpresaDados: any;

  Nome: any;

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterGrupoEmpresaByID(id).then((data) => {
      this.grupoEmpresaDados = data;
      console.log(this.grupoEmpresaDados);
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarGrupoEmpresa(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/cadastro/grupoempresas';
  }
}
