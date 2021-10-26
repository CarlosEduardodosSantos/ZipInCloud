import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fornecedor-exibir',
  templateUrl: './fornecedor-exibir.component.html',
  styleUrls: ['./fornecedor-exibir.component.scss'],
})
export class FornecedorExibirComponent implements OnInit {
  @Output() fornecedorId: EventEmitter<number> = new EventEmitter<number>();

  fornecedorLista: any;
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {
    this._api.obterTodosDadosFornecedor().then((data) => {
      this.fornecedorLista = data;
      console.log(this.fornecedorLista);
    });
  }

  onSubmitFornecedor(data: any) {
    this.fornecedorId.emit(data);
  }
}
