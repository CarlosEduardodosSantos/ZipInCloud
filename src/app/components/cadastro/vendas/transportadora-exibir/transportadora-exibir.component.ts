import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transportadora-exibir',
  templateUrl: './transportadora-exibir.component.html',
  styleUrls: ['./transportadora-exibir.component.scss'],
})
export class TransportadoraExibirComponent implements OnInit {
  @Output() transportadoraId: EventEmitter<number> = new EventEmitter<number>();
  @Output() transportadoraNome: EventEmitter<string> =
    new EventEmitter<string>();

  transportadoraLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    await this._api.obterTodosDadosTransportadoras().then((data) => {
      this.transportadoraLista = data;

      console.log(data);
    });
  }

  onSubmitTransportadora(data: any, nome: any) {
    this.transportadoraId.emit(data);
    this.transportadoraNome.emit(nome);
  }
}
