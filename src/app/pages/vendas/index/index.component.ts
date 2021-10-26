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
  listavendas: any;
  listavendasFormatada: any;

  dataDaVenda: any;

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faPrint = faPrint;
  faCreditCard = faCreditCard;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    await this._api.obterDadosVendas().then((data: any) => {
      this.listavendas = data;
      this.listavendasFormatada = data;

      let formatter = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL',
      });

      for (let i = 0; i < this.listavendasFormatada.length; i++) {
        this.listavendasFormatada[i].data = new Date(
          this.listavendasFormatada[i].data
        ).toLocaleString();
        this.listavendasFormatada[i].totalPedido = formatter.format(
          this.listavendasFormatada[i].totalPedido
        );
      }

      console.log(this.listavendasFormatada);
    });
  }

  cadastrar() {
    location.href = `vendas/cadastrar`;
  }

  deletarVenda(id: any) {
    var alertCondition = confirm('Deseja mesmo excluir está venda?');
    if (alertCondition) {
      this._api.excluirVenda(id);
      location.reload();
    }
  }

  obterDetalhes(vendaItemID: any) {
    location.href = `vendas/editar/${vendaItemID}`;
  }

  faturarPedido(vendaID: any) {
    this._api.obterTodosDadosVendaPeloID(vendaID).then((data) => {
      console.log(data);

      let result: any = data;
      result.dataFaturamento = new Date();
      result.status = 2;
      this._api.faturarVenda(vendaID, result).then(() => {
        location.reload();
      });
    });
  }
}
