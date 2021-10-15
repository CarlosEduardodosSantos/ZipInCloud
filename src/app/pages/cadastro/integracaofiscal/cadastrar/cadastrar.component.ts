import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  alertSuccessState = true;

  ICMSlista: any[] = [
    { descricao: '00 - Tributada integralmente', index: 0 },
    {
      descricao:
        '10 - Tributada e com cobrança do ICMS por substituição tributária',
      index: 10,
    },
    { descricao: '20 - Com redução de Base de Cálculo', index: 20 },
    {
      descricao:
        '30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária',
      index: 30,
    },
    { descricao: '40 - Isenta', index: 40 },
    { descricao: '41 - Não tributada', index: 41 },
    { descricao: '50 - Com suspensão', index: 50 },
    { descricao: '51 - Com diferimento', index: 51 },
    {
      descricao: '60 - ICMS cobrado anteriormente por substituição tributária',
      index: 60,
    },
    {
      descricao:
        '70 - Com redução da Base de Cálculo e cobrança do ICMS por substituição tributária',
      index: 70,
    },
    { descricao: '90- Outras', index: 90 },
    {
      descricao:
        '101 - Tributada pelo Simples Nacional com permissão de crédito',
      index: 101,
    },
    {
      descricao:
        '102 - Tributada pelo Simples Nacional sem permissão de crédito',
      index: 102,
    },
    {
      descricao:
        '103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta',
      index: 103,
    },
    {
      descricao:
        '201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária',
      index: 201,
    },
    {
      descricao:
        '202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária',
      index: 202,
    },
    {
      descricao:
        '203 - Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária',
      index: 203,
    },
    { descricao: '300 - Imune', index: 300 },
    { descricao: '400 - Não tributada pelo Simples Nacional', index: 400 },
    {
      descricao:
        '500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação',
      index: 500,
    },
    { descricao: '900 - Outros', index: 900 },
  ];

  COFINSlista: any[] = [
    { descricao: '01 - Operação Tributável com Alíquota Básica', index: 1 },
    {
      descricao: '02 - Operação Tributável com Alíquota Diferenciada',
      index: 2,
    },
    {
      descricao:
        '03 - Operação Tributável com Alíquota por Unidade de Medida de Produto',
      index: 3,
    },
    {
      descricao:
        '04 - Operação Tributável Monofásica - ReVenda a Alíquota Zero',
      index: 4,
    },
    {
      descricao: '05 - Operação Tributável por Substituição Tributária',
      index: 5,
    },
    { descricao: '06 - Operação Tributável a Alíquota Zero', index: 6 },
    { descricao: '07 - Operação Isenta da Contribuição', index: 7 },
    { descricao: '08 - Operação sem Incidência da Contribuição', index: 8 },
    { descricao: '09 - Operação com Suspensão da Contribuição', index: 9 },
    { descricao: '49 - Outras Operações de Saída', index: 49 },
  ];

  PISlista: any[] = [
    { descricao: '01 - Operação Tributável com Alíquota Básica', index: 1 },
    {
      descricao: '02 - Operação Tributável com Alíquota Diferenciada',
      index: 2,
    },
    {
      descricao:
        '03 - Operação Tributável com Alíquota por Unidade de Medida de Produto',
      index: 3,
    },
    {
      descricao:
        '04 - Operação Tributável Monofásica - ReVenda a Alíquota Zero',
      index: 4,
    },
    {
      descricao: '05 - Operação Tributável por Substituição Tributária',
      index: 5,
    },
    { descricao: '06 - Operação Tributável a Alíquota Zero', index: 6 },
    { descricao: '07 - Operação Isenta da Contribuição', index: 7 },
    { descricao: '08 - Operação sem Incidência da Contribuição', index: 8 },
    { descricao: '09 - Operação com Suspensão da Contribuição', index: 9 },
    { descricao: '49 - Outras Operações de Saída', index: 49 },
  ];

  CSTIPIlista: any[] = [
    { descricao: '00 - Entrada com Recuperação de Crédito', index: 0 },
    { descricao: '49 - Outras Entradas', index: 49 },
    { descricao: '50 - Saída Tributada', index: 50 },
    { descricao: '99 - Outras Saídas', index: 99 },
    { descricao: '01 - Entrada Tributada com Alíquota Zero', index: 1 },
    { descricao: '02 - Entrada Isenta', index: 2 },
    { descricao: '03 - Entrada Não Tributada', index: 3 },
    { descricao: '04 - Entrada Imune', index: 4 },
    { descricao: '05 - Entrada com Suspensão', index: 5 },
    { descricao: '51 - Saída Tributável com Alíquota Zero', index: 51 },
    { descricao: '52 - Saída Isenta', index: 52 },
    { descricao: '53 - Saída Não Tributada', index: 53 },
    { descricao: '54 - Saída Imune', index: 54 },
    { descricao: '55 - Saída com Suspensão', index: 55 },
  ];

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {}

  async onSubmit(data: any) {
    data.Imcs_RedST != true
      ? data.Imcs_RedST == false
      : data.Imcs_RedST == true;

    this.alertSuccessState = false;
    console.log(data);
    await this._api.salvarIntegracaoFiscal(data);
    setTimeout(() => {
      this.alertSuccessState = true;
    }, 3000);
  }
}
