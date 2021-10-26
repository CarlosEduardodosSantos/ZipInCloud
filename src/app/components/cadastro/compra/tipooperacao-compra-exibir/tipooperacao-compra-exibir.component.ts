import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tipooperacao-compra-exibir',
  templateUrl: './tipooperacao-compra-exibir.component.html',
  styleUrls: ['./tipooperacao-compra-exibir.component.scss'],
})
export class TipooperacaoCompraExibirComponent implements OnInit {
  @Output() operacaoId: EventEmitter<number> = new EventEmitter<number>();

  operacaoLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosDadosOperacoesCompra().then((data) => {
      this.operacaoLista = data;
      console.log(this.operacaoLista);
    });
  }

  onSubmitTipoOperacao(data: any) {
    this.operacaoId.emit(data);
  }
}
