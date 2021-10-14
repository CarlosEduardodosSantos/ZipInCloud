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

  listacategorias: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  idAtual: any = 0;
  descricaoAtual: any = '';

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
    this.chamarAPICategorias();
  }

  async chamarAPICategorias() {
    let data = await this._api.obterDadosCategoriasProdutos();

    this.listacategorias = data;
    console.log(this.listacategorias);
  }

  editarElemento(index: number) {
    location.href = `produtos/editar/${index}`;
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
