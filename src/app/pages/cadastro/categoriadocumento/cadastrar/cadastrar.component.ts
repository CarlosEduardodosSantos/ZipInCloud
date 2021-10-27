import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  categoriaTipo: any = [
    { Nome: 'Receber', i: 1 },
    { Nome: 'Pagar', i: 2 },
  ];

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {}

  async onSubmit(data: any) {
    console.log(data);

    await this._api.salvarCategoriaDocumentos(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/cadastro/categoriadocumentos';
  }
}
