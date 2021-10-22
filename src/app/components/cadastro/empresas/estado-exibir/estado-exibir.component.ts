import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-estado-exibir',
  templateUrl: './estado-exibir.component.html',
  styleUrls: ['./estado-exibir.component.scss'],
})
export class EstadoExibirComponent implements OnInit {
  @Output() unidadeFederativaId: EventEmitter<number> =
    new EventEmitter<number>();

  ufLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosEstadosUF().then((data) => {
      this.ufLista = data;
      console.log(this.ufLista);
    });
  }

  onSubmitUFEmpresa(data: any) {
    this.unidadeFederativaId.emit(data);
  }
}
