import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grupo-exibir',
  templateUrl: './grupo-exibir.component.html',
  styleUrls: ['./grupo-exibir.component.scss'],
})
export class GrupoExibirComponent implements OnInit {
  @Output() grupoEmpresaId: EventEmitter<number> = new EventEmitter<number>();

  grupoLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterGrupoEmpresa().then((data) => {
      this.grupoLista = data;
      console.log(this.grupoLista);
    });
  }

  onSubmitGrupoEmpresa(data: any) {
    this.grupoEmpresaId.emit(data);
  }
}
