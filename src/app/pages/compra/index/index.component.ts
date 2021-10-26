import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

import {
  faTrashAlt,
  faPrint,
  faCreditCard,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  listacompras: any;
  listacomprasFormatada: any;

  dataDaVenda: any;

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faPrint = faPrint;
  faCreditCard = faCreditCard;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    await this._api.obterDadosCompras().then((data: any) => {
      this.listacompras = data;
      this.listacomprasFormatada = data;

      let formatter = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL',
      });

      for (let i = 0; i < this.listacomprasFormatada.length; i++) {
        this.listacomprasFormatada[i].data = new Date(
          this.listacomprasFormatada[i].data
        ).toLocaleString();
        this.listacomprasFormatada[i].totalPedido = formatter.format(
          this.listacomprasFormatada[i].totalPedido
        );
      }

      console.log(this.listacomprasFormatada);
    });
  }

  cadastrar() {
    location.href = `compra/cadastrar`;
  }

  deletarCompra(id: any) {
    var alertCondition = confirm('Deseja mesmo excluir está compra?');
    if (alertCondition) {
      this._api.excluirCompra(id);
      location.reload();
    }
  }

  obterDetalhes(compraItemID: any) {
    location.href = `compra/editar/${compraItemID}`;
  }

  faturarPedido(compraID: any) {
    this._api.obterTodosDadosComprasPeloID(compraID).then((data) => {
      console.log(data);

      let result: any = data;
      result.dataFaturamento = new Date();
      result.status = 2;
      this._api.faturarCompra(compraID, result).then(() => {
        location.reload();
      });
    });
  }
}
