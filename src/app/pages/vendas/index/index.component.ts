import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

import {
  faWindowClose,
  faPrint,
  faEye,
  faCreditCard,
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

  faEye = faEye;
  faWindowClose = faWindowClose;
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
      /* location.reload(); */
    }
  }

  obterDetalhes(vendaItemID: any) {
    location.href = `vendas/editar/${vendaItemID}`;
  }

  faturarPedido(vendaID: any) {
    let data = this._api.obterTodosDadosVendaPeloID(vendaID).then((data) => {
      data.status = 2;
      this._api.faturarVenda(vendaID, data);
    });
    /* location.reload(); */
  }
}
