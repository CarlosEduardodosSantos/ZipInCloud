import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes-exibir',
  templateUrl: './clientes-exibir.component.html',
  styleUrls: ['./clientes-exibir.component.scss'],
})
export class ClientesExibirComponent implements OnInit {
  @Output() clientId: EventEmitter<number> = new EventEmitter<number>();

  clienteLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosDadosClientes().then((data) => {
      this.clienteLista = data;
      console.log(this.clienteLista);
    });
  }

  onSubmitCliente(data: any) {
    this.clientId.emit(data);
  }
}
