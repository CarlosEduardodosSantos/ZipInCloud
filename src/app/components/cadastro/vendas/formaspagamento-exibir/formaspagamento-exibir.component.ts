import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formaspagamento-exibir',
  templateUrl: './formaspagamento-exibir.component.html',
  styleUrls: ['./formaspagamento-exibir.component.scss'],
})
export class FormaspagamentoExibirComponent implements OnInit {
  @Output() formapagamentoId: EventEmitter<number> = new EventEmitter<number>();

  formapagamentoLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    await this._api.obterFormasDePagamento().then((data) => {
      this.formapagamentoLista = data;

      console.log(data);
    });
  }

  onSubmitFormaPagamento(data: any) {
    this.formapagamentoId.emit(data);
  }
}
