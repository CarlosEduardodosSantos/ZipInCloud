import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  clienteTipo: any = [
    { Nome: 'Cliente', i: 1 },
    { Nome: 'Fornecedor', i: 2 },
    { Nome: 'Transportadora', i: 3 },
    { Nome: 'Vendedor', i: 4 },
    { Nome: 'Contador', i: 5 },
    { Nome: 'Funcionário', i: 6 },
    { Nome: 'Comprador', i: 7 },
    { Nome: 'Motorista', i: 8 },
  ];

  clientes: any = false;
  fornecedor: any = false;
  transportadora: any = false;
  vendedor: any = false;
  contador: any = false;
  funcionario: any = false;
  comprador: any = false;
  motorista: any = false;

  faPlusCircle = faPlusCircle;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {}

  add(index: any) {
    console.log(index);
    index == 1 ? (this.clientes = true) : '';
    index == 2 ? (this.fornecedor = true) : '';
    index == 3 ? (this.transportadora = true) : '';
    index == 4 ? (this.vendedor = true) : '';
    index == 5 ? (this.contador = true) : '';
    index == 6 ? (this.funcionario = true) : '';
    index == 7 ? (this.comprador = true) : '';
    index == 8 ? (this.motorista = true) : '';
    console.log(this.clientes);
  }

  remove(index: any) {
    console.log(index);
    index == 1 ? (this.clientes = false) : '';
    index == 2 ? (this.fornecedor = false) : '';
    index == 3 ? (this.transportadora = false) : '';
    index == 4 ? (this.vendedor = false) : '';
    index == 5 ? (this.contador = false) : '';
    index == 6 ? (this.funcionario = false) : '';
    index == 7 ? (this.comprador = false) : '';
    index == 8 ? (this.motorista = false) : '';
  }

  async onSubmit(data: any) {
    console.log(data);

    /* await this._api.salvarClientes(data); */
  }
}
