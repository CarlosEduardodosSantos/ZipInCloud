import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  menuTipo: any;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    this._api.obterMenus().then((data) => {
      this.menuTipo = data;

      console.log(this.menuTipo);
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.salvarMenusItems(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/sistema/menusitems';
  }
}
