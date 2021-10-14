import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-categorias-modificar',
  templateUrl: './categorias-modificar.component.html',
  styleUrls: ['./categorias-modificar.component.scss'],
})
export class CategoriasModificarComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async onSubmitConfiguracao(data: any) {
    data.imagem == '' || data.imagem == null ? (data.imagem = null) : '';
    console.log(data);
    await this._api.modificarCategoria(data);
    location.reload();
  }
}
