import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  dadosAnteriores: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterMenusByID(id).then((data) => {
      this.dadosAnteriores = data;

      console.log(data);
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarMenus(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/sistema/menus';
  }
}
