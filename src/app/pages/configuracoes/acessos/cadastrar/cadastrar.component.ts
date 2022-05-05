import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  acessoUsuario: any;
  menu: any;
  menuItem: any;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    this._api.obterPerfilUsuario().then((data: any) => {
      this.acessoUsuario = data;
    });

    this._api.obterMenus().then((data: any) => {
      this.menu = data;
    });

    this._api.obterMenusItems().then((data: any) => {
      this.menuItem = data;
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.salvarPerfilUsuario(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/configuracoes/perfilusuario';
  }
}
