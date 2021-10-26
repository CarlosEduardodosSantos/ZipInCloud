import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listaprodutos: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  term: any;

  async ngOnInit() {
    await this._api.obterTodosDadosProdutos().then((data) => {
      this.listaprodutos = data;

      console.log(this.listaprodutos);
    });
  }

  editarElemento(index: number) {
    location.href = `produtos/editar/${index}`;
  }

  excluirElemento(index: number) {
    this._api.excluirProduto(index);
  }

  criarProduto() {
    location.href = `produtos/cadastrar`;
  }

  importProduto() {}
}
