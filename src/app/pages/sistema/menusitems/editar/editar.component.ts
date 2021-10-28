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
  menuTipo: any;
  dadosAnteriores: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterMenusItemsByID(id).then((data) => {
      this.dadosAnteriores = data;

      console.log(data);
    });

    this._api.obterMenus().then((data) => {
      this.menuTipo = data;

      console.log(this.menuTipo);
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarMenusItems(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/sistema/menusitems';
  }
}
