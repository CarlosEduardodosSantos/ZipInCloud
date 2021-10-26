import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comprador-compra-exibir',
  templateUrl: './comprador-compra-exibir.component.html',
  styleUrls: ['./comprador-compra-exibir.component.scss'],
})
export class CompradorCompraExibirComponent implements OnInit {
  @Output() compradorId: EventEmitter<number> = new EventEmitter<number>();

  compradorLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosDadosComprador().then((data) => {
      this.compradorLista = data;
      console.log(this.compradorLista);
    });
  }

  onSubmitComprador(data: any) {
    this.compradorId.emit(data);
  }
}
