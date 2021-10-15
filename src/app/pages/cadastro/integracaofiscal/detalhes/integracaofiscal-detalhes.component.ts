import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-integracaofiscal-detalhes',
  templateUrl: './integracaofiscal-detalhes.component.html',
  styleUrls: ['./integracaofiscal-detalhes.component.scss'],
})
export class IntegracaofiscalDetalhesComponent implements OnInit {
  detalheslista: any;

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    await this._api.obterDadosIntegracaoFiscalPeloID(id).then((data) => {
      this.detalheslista = data;
    });

    console.log(this.detalheslista);
  }
}
