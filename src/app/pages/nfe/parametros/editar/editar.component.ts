import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  modeloDocumento: any = [
    { modelo: 'NFe', i: 55 },
    { modelo: 'CTe', i: 57 },
    { modelo: 'MDFe', i: 58 },
    { modelo: 'NFCe', i: 65 },
    { modelo: 'CTeOS', i: 67 },
  ];

  tipoEmissao: any = [
    { modelo: 'teNormal', i: 1 },
    { modelo: 'teFSIA', i: 2 },
    { modelo: 'teSCAN', i: 3 },
    { modelo: 'teEPEC', i: 4 },
    { modelo: 'teFSDA', i: 5 },
    { modelo: 'teSVCAN', i: 6 },
    { modelo: 'teSVCRS', i: 7 },
    { modelo: 'teOffLine', i: 9 },
  ];

  tipoAmbiente: any = [
    { modelo: 'Produção', i: 1 },
    { modelo: 'Homologação', i: 2 },
  ];

  protocolo: any = [
    { modelo: 'SystemDefault', i: 0 },
    { modelo: 'Ssl3', i: 48 },
    { modelo: 'Tls', i: 192 },
    { modelo: 'Tls11', i: 768 },
    { modelo: 'Tls12', i: 3072 },
    { modelo: 'Tls13', i: 12288 },
  ];

  tipoVersao: any = [
    { modelo: 'Versao100', i: 100 },
    { modelo: 'Versao200', i: 200 },
    { modelo: 'Versao300', i: 300 },
    { modelo: 'Versao310', i: 310 },
    { modelo: 'Versao400', i: 400 },
  ];

  dadosAnteriores: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterParametrosNFeByID(id).then((data) => {
      this.dadosAnteriores = data;
      console.log(data);
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarParametrosNFe(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/nfe/parametros';
  }
}
