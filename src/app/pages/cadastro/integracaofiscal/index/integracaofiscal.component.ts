import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-integracaofiscal',
  templateUrl: './integracaofiscal.component.html',
  styleUrls: ['./integracaofiscal.component.scss'],
})
export class IntegracaofiscalComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listaintegracaofiscal: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  idAtual: any = 0;
  integracaoFiscalAtual: any = '';

  detalheslista: any;

  async ngOnInit() {
    await this._api.obterDadosIntegracaoFiscalProdutos().then((data) => {
      this.listaintegracaofiscal = data;
      console.log(this.listaintegracaofiscal);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirIntegracaoFiscal(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/cadastro/integracaofiscal/cadastrar/';
  }

  dadosespecificos(id: number) {
    location.href = '/cadastro/integracaofiscal/detalhes/' + id;
  }

  editar(id: any) {
    location.href = '/cadastro/integracaofiscal/editar/' + id;
  }
}
