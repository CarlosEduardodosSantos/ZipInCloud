import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  dadosAnteriores: any;

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

  dadosAdicionais: any;
  dataAntiga: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterTodosDadosProdutos().then((data: any) => {
      this.todosOsProdutos = data;
      console.log(data);
    });

    this._api.obterTodosDadosComprasPeloID(id).then((data: any) => {
      console.log(data);

      this.dadosAnteriores = data;
      this.idComprador = data.pessoaCompradorID;
      this.idFornecedor = data.pessoaFornecedorID;
      this.idOperacao = data.tipoOperacaoID;
      this.listaProdutos = data.compraItens;
      this.dataAntiga = data.data;
      this.dadosAdicionais = data.dadosAdicionais;
      this.idFormaDePagamento = data.compraFormaPagamentos[0].formaPagamentoID;
      this.valorFinal = data.totalFinal;

      data.compraItens.forEach((elem: any) => {
        console.log(elem);
        elem.totalDesconto = elem.desconto;
        elem.totalAcrescimo = elem.acrescimo;
        this.falta = this.valorFinal - this.pagamentoFinal;
      });

      this._api
        .obterDadosComprador(data.pessoaCompradorID)
        .then((data: any) => {
          console.log(data);
          this.compradorDados = data.pessoa;
        });

      this._api
        .obterDadosFornecedor(data.pessoaFornecedorID)
        .then((data: any) => {
          console.log(data);
          this.fornecedorDados = data.pessoa;
        });

      this._api
        .obterDadosTipoOperação(data.tipoOperacaoID)
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
          this.formaDePagamentoDados = data;
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

    this._api.modificarCompra(data).then(() => {
      this.retornar();
    });
  }

  retornar() {
    location.href = '/compra';
  }
}
