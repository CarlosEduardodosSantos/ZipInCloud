import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  idFornecedor: any;
  fornecedorDados: any = { nome: '' };

  idComprador: any;
  compradorDados: any = { nome: '' };

  idOperacao: any;
  operacaoDados: any = { descricao: '' };

  idTransportadora: any;
  transportadoraDados: any = { nome: '' };

  idFormaDePagamento: any;
  formaDePagamentoDados: any = { descricao: '' };

  todosOsProdutos: any;
  item: any;
  listaProdutos: any[] = [];

  descontoFinal: number = 0;
  acrescimoFinal: number = 0;
  valorFinal: number = 0;
  pagamentoFinal: number = 0;
  falta: number = 0;

  Math = Math;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {
    this._api.obterTodosDadosProdutos().then((data: any) => {
      this.todosOsProdutos = data;
      console.log(data);
    });
  }

  async adicionarProduto(data: any) {
    await this._api
      .obterDadosProdutosPeloID(data.ProdutoID)
      .then((data: any) => {
        this.listaProdutos.push({
          produtoID: data.id,
          descricaoProduto: data.descricao,
          quantidade: 1,
          precoUnitario: data.valorVenda,
          subTotal: data.valorVenda,
          totalDesconto: 0,
          totalAcrescimo: 0,
          frete: 0,
          outrasDespesas: 0,
          seguro: 0,
          totalFinal: data.valorVenda,
        });

        this.valorFinal = this.valorFinal + data.valorVenda;
        this.falta = this.valorFinal - this.pagamentoFinal;
      });
  }

  calcularFinal() {
    this.falta = this.valorFinal - this.pagamentoFinal;
  }

  passarValorPago(num: any) {
    this.pagamentoFinal = num;
    this.falta = this.valorFinal - this.pagamentoFinal;
  }

  salvarIdFornecedor(num: any) {
    this.idFornecedor = num;

    this._api.obterDadosFornecedor(this.idFornecedor).then((data: any) => {
      this.fornecedorDados = data.pessoa;

      console.log(data);
    });
  }

  salvarIdComprador(num: any) {
    this.idComprador = num;

    this._api.obterDadosComprador(this.idComprador).then((data: any) => {
      this.compradorDados = data.pessoa;
      console.log(data);
    });
  }

  salvarTipoOperacao(num: any) {
    this.idOperacao = num;

    this._api.obterDadosTipoOperação(this.idOperacao).then((data) => {
      this.operacaoDados = data;
      console.log(data);
    });
  }

  salvarTransportadoraId(num: any) {
    this.idTransportadora = num;
  }
  salvarTransportadoraNome(str: any) {
    this.transportadoraDados.nome = str;
  }

  salvarFormaPagamentoId(num: any) {
    this.idFormaDePagamento = num;

    this._api
      .obterFormasDePagamentoPeloID(this.idFormaDePagamento)
      .then((data) => {
        this.formaDePagamentoDados = data;
        console.log(data);
      });
  }

  onSubmit(data: any) {
    data.CompraItens = this.listaProdutos;
    data.Status = 1;
    data.Troco = this.falta <= 0 ? Math.abs(this.falta) : 0;
    delete this.formaDePagamentoDados.id;
    data.CompraFormaPagamentos = [this.formaDePagamentoDados];
    data.CompraFormaPagamentos[0].FormaPagamentoID = this.idFormaDePagamento;
    data.CompraFormaPagamentos[0].Valor = this.valorFinal;

    console.log(data);

    this._api.salvarCompra(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/compra';
  }
}
