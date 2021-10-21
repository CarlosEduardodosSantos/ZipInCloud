import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendedores-exibir',
  templateUrl: './vendedores-exibir.component.html',
  styleUrls: ['./vendedores-exibir.component.scss'],
})
export class VendedoresExibirComponent implements OnInit {
  @Output() vendedorId: EventEmitter<number> = new EventEmitter<number>();

  vendedoresLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosDadosVendedores().then((data) => {
      this.vendedoresLista = data;
      console.log(this.vendedoresLista);
    });
  }

  onSubmitVendedor(data: any) {
    this.vendedorId.emit(data);
  }
}
