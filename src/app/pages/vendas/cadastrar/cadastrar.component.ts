import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  idCliente: any;
  clienteDados: any[] = [{ nome: '', id: '' }];

  idVendedor: any;
  vendedorDados: any[] = [{ nome: '', id: '' }];

  idOperacao: any;
  operacaoDados: any[] = [{ nome: '', id: '' }];

  idTransportadora: any;
  transportadoraDados: any[] = [{ nome: '', id: '' }];

  idFormaDePagamento: any;
  formaDePagamentoDados: any[] = [{ descricao: '', id: '' }];

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

  salvarIdCliente(num: any) {
    this.idCliente = num;

    this._api.obterDadosClienteCompleto(this.idCliente).then((data: any) => {
      this.clienteDados = data;
    });
  }

  salvarIdVendedor(num: any) {
    this.idVendedor = num;

    this._api.obterDadosVendedor(this.idVendedor).then((data) => {
      this.vendedorDados[0] = data;
    });
  }

  salvarTipoOperacao(num: any) {
    this.idOperacao = num;

    this._api.obterDadosTipoOperação(this.idOperacao).then((data) => {
      this.operacaoDados[0] = data;
    });
  }

  salvarTransportadoraId(num: any) {
    this.idTransportadora = num;
  }
  salvarTransportadoraNome(str: any) {
    this.transportadoraDados[0].nome = str;
  }

  salvarFormaPagamentoId(num: any) {
    this.idFormaDePagamento = num;

    this._api
      .obterFormasDePagamentoPeloID(this.idFormaDePagamento)
      .then((data) => {
        this.formaDePagamentoDados[0] = data;
        console.log(data);
      });
  }

  onSubmit(data: any) {
    data.VendaItens = this.listaProdutos;
    data.troco = this.falta <= 0 ? Math.abs(this.falta) : 0;
    data.VendaItens.Desconto = this.descontoFinal;
    data.VendaItens.Acrescimo = this.acrescimoFinal;
    data.status = 1;
    data.PessoaTransportadoraID = this.idTransportadora;
    data.VendaFormaPagamentos = this.formaDePagamentoDados;
    data.VendaFormaPagamentos[0].FormaPagamentoID = this.idFormaDePagamento;
    data.VendaFormaPagamentos[0].Valor = this.valorFinal;
    delete this.formaDePagamentoDados[0].id;
    data.VendaFormaPagamentos = this.formaDePagamentoDados;

    console.log(data);

    this._api.salvarVenda(data);
  }

  retornar() {
    location.href = '/vendas';
  }
}
