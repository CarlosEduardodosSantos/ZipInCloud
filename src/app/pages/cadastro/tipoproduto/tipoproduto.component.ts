import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';
import { Subject } from 'rxjs';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tipoproduto',
  templateUrl: './tipoproduto.component.html',
  styleUrls: ['./tipoproduto.component.scss'],
})
export class TipoprodutoComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listatipodeprodutos: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  idAtual: any = 0;
  tipoProdutoAtual: any = '';

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
    this.chamarAPIMarcas();
  }

  async chamarAPIMarcas() {
    let data = await this._api.obterDadosMarcasProdutos();

    this.listatipodeprodutos = data;
    console.log(this.listatipodeprodutos);
  }

  excluirElemento(index: number) {
    this._api.excluirMarca(index);
    /* location.reload(); */
  }

  obterId(id: any, descricao: any) {
    this.idAtual = id;
    this.tipoProdutoAtual = descricao;
  }
}
