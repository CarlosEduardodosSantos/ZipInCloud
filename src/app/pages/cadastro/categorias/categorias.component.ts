import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';
import { Subject } from 'rxjs';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listacategorias: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  idAtual: any = 0;
  descricaoAtual: any = '';

  categoriaDadosAtuais: any;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
    this.chamarAPICategorias();
  }

  async chamarAPICategorias() {
    await this._api.obterDadosCategoriasProdutos().then((data) => {
      console.log(data);
      this.listacategorias = data;
    });
  }

  async modificarCategoria(data: any) {
    await this._api.modificarCategoria(data);
    location.reload();
  }

  excluirElemento(index: number) {
    this._api.excluirCategoria(index);
    location.reload();
  }

  obterId(id: any, descricao: any) {
    this.idAtual = id;
    this.descricaoAtual = descricao;
  }
}
