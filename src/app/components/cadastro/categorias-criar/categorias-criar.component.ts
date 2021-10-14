import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-categorias-criar',
  templateUrl: './categorias-criar.component.html',
  styleUrls: ['./categorias-criar.component.scss'],
})
export class CategoriasCriarComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async onSubmitCadastro(data: any) {
    data.imagem == '' ? (data.imagem = null) : '';
    await this._api.salvarCategoria(data);
    location.reload();
  }
}
