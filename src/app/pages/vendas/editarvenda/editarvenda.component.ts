import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editarvenda',
  templateUrl: './editarvenda.component.html',
  styleUrls: ['./editarvenda.component.scss'],
})
export class EditarvendaComponent implements OnInit {
  dadosAnteriores: any;

  idCliente: any;
  clienteDados: any = { nome: '' };

  idVendedor: any;
  vendedorDados: any = { nome: '' };

  idOperacao: any;
  operacaoDados: any = { nome: '' };

  idTransportadora: any;
  transportadoraDados: any = { nome: '' };

  idFormaDePagamento: any;
  formaDePagamentoDados: any = [{ descricao: '', id: '' }];

  todosOsProdutos: any;
  item: any;
  listaProdutos: any;

  descontoFinal: number = 0;
  acrescimoFinal: number = 0;
  valorFinal: number = 0;
  pagamentoFinal: number = 0;
  falta: number = 0;

  Math = Math;

  dadosAdicionais: any;
  dataAntiga: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterTodosDadosProdutos().then((data: any) => {
      this.todosOsProdutos = data;
      console.log(data);
    });

    this._api.obterTodosDadosVendaPeloID(id).then((data: any) => {
      console.log(data);

      this.dadosAnteriores = data;
      this.idCliente = data.pessoaClienteID;
      this.idVendedor = data.pessoaVendedorID;
      this.idOperacao = data.tipoOperacaoID;
      this.listaProdutos = data.vendaItens;
      this.dataAntiga = data.data;
      this.dadosAdicionais = data.dadosAdicionais;
      this.idFormaDePagamento = data.vendaFormaPagamentos[0].formaPagamentoID;
      this.valorFinal = data.totalFinal;

      data.vendaItens.forEach((elem: any) => {
        console.log(elem);
        elem.totalDesconto = elem.desconto;
        elem.totalAcrescimo = elem.acrescimo;
        this.falta = this.valorFinal - this.pagamentoFinal;
      });

      this._api
        .obterDadosClienteCompleto(data.pessoaClienteID)
        .then((data: any) => {
          console.log(data);
          this.clienteDados = data.pessoa;
        });

      this._api
        .obterDadosVendedorCompleto(data.pessoaVendedorID)
        .then((data: any) => {
          console.log(data);
          this.vendedorDados = data.pessoa;
        });

      this._api
        .obterDadosTipoOpera????o(data.tipoOperacaoID)
        .then((data: any) => {
          console.log(data);
          this.operacaoDados = data;
        });

      this._api
        .obterDadosTransportadoraPeloID(data.pessoaTransportadoraID)
        .then((data: any) => {
          console.log(data);
          this.idTransportadora = data.id;
          this.transportadoraDados = data.pessoa;
        });

      this._api
        .obterFormasDePagamentoPeloID(this.idFormaDePagamento)
        .then((data) => {
          this.formaDePagamentoDados[0] = data;
          console.log(data);
        });
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
    console.log(this.listaProdutos);
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

    this._api.obterDadosClienteCompleto(this.idCliente).then((data) => {
      console.log(data);

      let res: any = data;
      console.log(res);
      this.clienteDados = res.pessoa;
    });
  }

  salvarIdVendedor(num: any) {
    this.idVendedor = num;

    this._api.obterDadosVendedorCompleto(this.idVendedor).then((data) => {
      console.log(data);

      let res: any = data;
      this.vendedorDados = res.pessoa;
    });
  }

  salvarTipoOperacao(num: any) {
    this.idOperacao = num;

    this._api.obterDadosTipoOpera????o(this.idOperacao).then((data) => {
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
        this.formaDePagamentoDados[0] = data;
        console.log(data);
      });
  }

  onSubmit(data: any) {
    data.VendaItens = this.listaProdutos;
    data.Troco = this.falta <= 0 ? Math.abs(this.falta) : 0;
    data.PessoaTransportadoraID = this.idTransportadora;
    console.log(this.formaDePagamentoDados);
    console.log(data.VendaFormaPagamentos);
    data.VendaFormaPagamentos = this.formaDePagamentoDados;
    data.VendaFormaPagamentos[0].FormaPagamentoID = this.idFormaDePagamento;
    data.VendaFormaPagamentos[0].Valor = this.valorFinal;

    data.DadosAdicionais = this.dadosAdicionais;

    delete this.formaDePagamentoDados[0].id;

    data.id = this.dadosAnteriores.id;

    console.log(data);

    this._api.modificarVenda(data).then((data: any) => {
      console.log(data);
      this.retornar();
    });
  }

  retornar() {
    location.href = '/vendas';
  }
}
