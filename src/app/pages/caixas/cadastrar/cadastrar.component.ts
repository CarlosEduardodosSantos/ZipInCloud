import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  numero: any = [
    { i: 1 },
    { i: 2 },
    { i: 3 },
    { i: 4 },
    { i: 5 },
    { i: 6 },
    { i: 7 },
    { i: 8 },
    { i: 9 },
    { i: 10 },
    { i: 11 },
    { i: 12 },
    { i: 13 },
    { i: 14 },
    { i: 15 },
  ];

  emissaoCupom: any = [
    { Nome: 'Fiscal', i: 1 },
    { Nome: 'Normal', i: 2 },
    { Nome: 'Perguntar', i: 3 },
  ];

  tipo: any = [
    { Nome: 'Mercado', i: 1 },
    { Nome: 'Restaurante', i: 2 },
  ];

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {}

  async onSubmit(data: any) {
    data.Numero < 10 ? (data.Numero = '0' + data.Numero) : '';

    console.log(data);

    await this._api.salvarCaixas(data).then(() => {
      location.href = 'caixa';
    });
  }
}
