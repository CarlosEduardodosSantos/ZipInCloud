import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  indicadorPagamento: any = [
    { Nome: 'Pagamento à Vista', i: 1 },
    { Nome: 'Pagamento à Prazo', i: 2 },
  ];

  meioPagamento: any = [
    { Nome: 'Dinheiro', i: 1 },
    { Nome: 'Cheque', i: 2 },
    { Nome: 'Cartão de Crédito', i: 3 },
    { Nome: 'Cartão de Débito', i: 4 },
    { Nome: 'Crédito Loja', i: 5 },
    { Nome: 'Vale Alimentação', i: 6 },
    { Nome: 'Vale Refeição', i: 7 },
    { Nome: 'Vale Presente', i: 8 },
    { Nome: 'Vale Combustível', i: 9 },
    { Nome: 'Boleto', i: 10 },
    { Nome: 'Sem Pagamento', i: 11 },
    { Nome: 'Outros', i: 99 },
  ];

  bandeiraCartao: any = [
    { Nome: 'Visa', i: 1 },
    { Nome: 'Mastercard', i: 2 },
    { Nome: 'American Express', i: 3 },
    { Nome: 'Sorocred', i: 4 },
    { Nome: 'Diners Club', i: 5 },
    { Nome: 'Elo', i: 6 },
    { Nome: 'Hipercard', i: 7 },
    { Nome: 'Aura', i: 8 },
    { Nome: 'Cabal', i: 9 },
    { Nome: 'Outros', i: 99 },
  ];

  peridiocidadePagamento: any = [
    { Nome: 'Diario', i: 1 },
    { Nome: 'Semanal', i: 2 },
    { Nome: 'Quinzenal', i: 3 },
    { Nome: 'Mensal', i: 4 },
    { Nome: 'Bimestral', i: 5 },
    { Nome: 'Trimestral', i: 6 },
    { Nome: '35 D', i: 7 },
    { Nome: '40 D', i: 8 },
    { Nome: '45 D', i: 9 },
    { Nome: 'Semestral', i: 10 },
    { Nome: 'Anual', i: 11 },
    { Nome: 'Bienal', i: 12 },
    { Nome: 'Outro', i: 99 },
  ];

  dadosAnteriores: any;
  d: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterFormaPagamentoByID(id).then((data) => {
      this.dadosAnteriores = data;
      console.log(data);
      this.d = 1;
    });
  }

  async onSubmit(data: any) {
    console.log(data);

    await this._api.modificarFormaPagamento(data);
  }
}
