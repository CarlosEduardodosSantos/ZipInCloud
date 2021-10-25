import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-municipio-exibir',
  templateUrl: './municipio-exibir.component.html',
  styleUrls: ['./municipio-exibir.component.scss'],
})
export class MunicipioExibirComponent implements OnInit {
  @Output() municipioId: EventEmitter<number> = new EventEmitter<number>();
  @Input() estadoId: any;

  municipioLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    setInterval(() => {
      if (this.estadoId != null || this.estadoId != undefined) {
        this._api.obterTodosMunicipiosByID(this.estadoId).then((data) => {
          this.municipioLista = data;
        });
      }
    }, 2000);
  }

  onSubmitMunicipioEmpresa(data: any) {
    this.municipioId.emit(data);
  }
}
