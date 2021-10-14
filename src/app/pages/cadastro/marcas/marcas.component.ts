import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';
import { Subject } from 'rxjs';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listamarcas: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  idAtual: any = 0;
  marcaAtual: any = '';

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
    this.chamarAPIMarcas();
  }

  async chamarAPIMarcas() {
    let data = await this._api.obterDadosMarcasProdutos();

    this.listamarcas = data;
    console.log(this.listamarcas);
  }

  excluirElemento(index: number) {
    this._api.excluirMarca(index);
    /* location.reload(); */
  }

  obterId(id: any, descricao: any) {
    this.idAtual = id;
    this.marcaAtual = descricao;
  }
}
