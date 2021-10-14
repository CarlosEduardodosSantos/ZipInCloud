import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';
import { Subject } from 'rxjs';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-unidadesdemedida',
  templateUrl: './unidadesdemedida.component.html',
  styleUrls: ['./unidadesdemedida.component.scss'],
})
export class UnidadesdemedidaComponent implements OnInit {
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

  async onSubmitCadastro(data: any) {
    data.imagem == '' ? (data.imagem = null) : '';
    await this._api.salvarCategoria(data);
    location.reload();
  }

  async onSubmitConfiguracao(data: any) {
    data.imagem == '' || data.imagem == null ? (data.imagem = null) : '';
    console.log(data);
    await this._api.modificarCategoria(data);
    location.reload();
  }

  obterId(id: any, descricao: any) {
    this.idAtual = id;
    this.descricaoAtual = descricao;
  }
}
