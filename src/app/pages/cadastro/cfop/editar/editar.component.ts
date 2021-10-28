import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  dadosAnteriores: any;

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterCfopsByID(id).then((data) => {
      this.dadosAnteriores = data;
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarCfops(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/cadastro/cfop';
  }
}
