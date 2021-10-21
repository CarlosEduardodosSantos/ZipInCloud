import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tipooperacoes-exibir',
  templateUrl: './tipooperacoes-exibir.component.html',
  styleUrls: ['./tipooperacoes-exibir.component.scss'],
})
export class TipooperacoesExibirComponent implements OnInit {
  @Output() operacaoId: EventEmitter<number> = new EventEmitter<number>();

  operacaoLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosDadosOperacoesVenda().then((data) => {
      this.operacaoLista = data;
      console.log(this.operacaoLista);
    });
  }

  onSubmitTipoOperacao(data: any) {
    this.operacaoId.emit(data);
  }
}
