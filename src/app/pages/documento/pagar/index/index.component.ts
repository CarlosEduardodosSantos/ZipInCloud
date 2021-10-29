import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';
import { faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  listaCfop: any;

  faCogs = faCogs;
  faTrashAlt = faTrashAlt;

  async ngOnInit() {
    await this._api.obterCfops().then((data: any) => {
      this.listaCfop = data;
      console.log(data);
    });
  }

  excluirElemento(index: number) {
    this._api.excluirCfops(index);
    location.reload();
  }

  cadastrar() {
    location.href = '/cadastro/cfop/cadastrar';
  }

  editar(id: any) {
    location.href = '/cadastro/cfop/editar/' + id;
  }
}
