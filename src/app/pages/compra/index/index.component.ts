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
  listacompras: any;
  listacomprasFormatada: any;

  dataDaCompra: any;

  faEye = faEye;
  faWindowClose = faWindowClose;
  faPrint = faPrint;
  faCreditCard = faCreditCard;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    /* await this._api.obterDadosCompras().then((data: any) => {
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
    }); */
  }

  cadastrar() {
    location.href = `compra/cadastrar`;
  }

  deletarCompra(id: any) {
    var alertCondition = confirm('Deseja mesmo excluir esta compra?');
    if (alertCondition) {
      /* this._api.excluirCompra(id); */
      /* location.reload(); */
    }
  }

  obterDetalhes(compraItemID: any) {
    location.href = `compra/editar/${compraItemID}`;
  }

  faturarPedido(compraID: any) {
    /* let data = this._api.obterTodosDadosCompraPeloID(compraID).then((data) => {
      data.status = 2;
      this._api.faturarCompra(compraID, data);
    });
    location.reload(); */
  }
}
