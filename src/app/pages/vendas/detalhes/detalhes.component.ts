import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  id: any;
  fromRoute: any;

  dados: any;
  dadosVenda: any;
  dadosVendedor: any;
  idCliente: any;
  dadosCliente: any;
  dataDaVenda: any;
  dadosOperacao: any;
  formasDePagamento: any;

  faCheck = faCheck;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fromRoute = this.route.snapshot.paramMap.get('initialRoute');

    await this._api.obterDadosVendaPeloID(this.id).then((data) => {
      this.dados = data;

      this._api
        .obterTodosDadosVendaPeloID(this.dados.vendaID)
        .then((data: any) => {
          this.dadosVenda = data;

          this._api
            .obterDadosVendedor(this.dadosVenda.pessoaVendedorID)
            .then((data: any) => {
              this.dadosVendedor = data;

              this.dataDaVenda = new Date(
                this.dadosVenda.data
              ).toLocaleString();
            });

          this._api
            .obterDadosCliente(this.dadosVenda.pessoaClienteID)
            .then((data: any) => {
              this.idCliente = data.pessoaID;

              this._api.obterDadosPessoa(this.idCliente).then((data: any) => {
                this.dadosCliente = data;
              });
            });

          this._api
            .obterDadosTipoOperação(this.dadosVenda.tipoOperacaoID)
            .then((data: any) => {
              this.dadosOperacao = data;
            });
        });

      let formatter = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL',
      });

      this._api.obterFormasDePagamento().then((data: any) => {
        this.formasDePagamento = data;
      });

      this.dados.precoUnitario = formatter.format(this.dados.precoUnitario);
      this.dados.subTotal = formatter.format(this.dados.subTotal);
      this.dados.totalFinal = formatter.format(this.dados.totalFinal);
      this.dados.desconto = formatter.format(this.dados.desconto);
      this.dados.acrescimo = formatter.format(this.dados.acrescimo);
      this.dados.frete = formatter.format(this.dados.frete);
      this.dados.outrasDespesas = formatter.format(this.dados.outrasDespesas);
      this.dados.seguro = formatter.format(this.dados.seguro);
    });

    setTimeout(() => {
      console.log(this.dados);
      console.log(this.dadosVenda);
      console.log(this.dadosVendedor);
      console.log(this.dadosCliente);
      console.log(this.dadosOperacao);
      console.log(this.formasDePagamento);
    }, 1000);
  }

  retornar() {
    if (this.fromRoute == 1) {
      location.href = '/vendas';
    } else if (this.fromRoute == 2) {
      location.href = '/produtos';
    }
  }
}
