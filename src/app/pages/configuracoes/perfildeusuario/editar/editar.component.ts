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

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterPerfilUsuarioByID(id).then((data: any) => {
      this.dadosAnteriores = data;
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarPerfilUsuario(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/configuracoes/perfilusuario';
  }
}
