import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DashboardsService } from 'src/app/services/api/dashboards.service';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { CounterService } from 'src/app/services/utilitarios/counter.service';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  mes1: any = 0;
  mes2: any = 0;
  mes3: any = 0;
  mes4: any = 0;
  mes5: any = 0;
  mes6: any = 0;
  mes7: any = 0;
  mes8: any = 0;
  mes9: any = 0;
  mes10: any = 0;
  mes11: any = 0;
  mes12: any = 0;

  maioresProdutos: any[] = [];
  maioresProdutosAno: any[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  HighchartsMaioresProdutosMes: typeof Highcharts = Highcharts;
  HighchartsMaioresProdutosAnual: typeof Highcharts = Highcharts;

  updateFlag = false;
  updateFlagMaioresProdutosMes = false;
  updateFlagMaioresProdutosAnual = false;

  chartOptions: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['carregando'],
        type: 'spline',
        color: '#000',
      },
    ],
    title: { text: 'Compras Anual' },
    xAxis: {
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      crosshair: false,
    },
    yAxis: {
      crosshair: false,
      title: { text: null },
    },
    credits: { enabled: false },
  };

  chartOptionsMaioresProdutosMes: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['carregando'],
        type: 'spline',
        color: '#000',
      },
    ],
    title: { text: 'Maiores Produtos - Mensal' },
    xAxis: {
      categories: ['carregando'],
      crosshair: false,
    },
    yAxis: {
      crosshair: false,
      title: { text: null },
    },
    credits: { enabled: false },
  };

  chartOptionsMaioresProdutosAnual: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['carregando'],
        type: 'spline',
        color: '#000',
      },
    ],
    title: { text: 'Maiores Produtos - Anual' },
    xAxis: {
      categories: ['carregando'],
      crosshair: false,
    },
    yAxis: {
      crosshair: false,
      title: { text: null },
    },
    credits: { enabled: false },
  };

  faMoneyBill = faMoneyBill;

  comprasDiarias: any;
  valorComprasDiariamente: any = 0;
  comprasMensais: any;
  valorComprasMensais: any = 0;
  comprasAnuais: any;
  valorComprasAnuais: any = 0;

  constructor(
    private _api: DashboardsService,
    private _product: ZipincloudService,
    private _counter: CounterService
  ) {}

  async ngOnInit() {
    let mes = new Date().getMonth();

    await this._api.obterComprasFaturadasDia().then((data) => {
      this.comprasDiarias = data;
    });
    for (let index = 0; index < this.comprasDiarias.length; index++) {
      this.valorComprasDiariamente =
        this.valorComprasDiariamente + this.comprasDiarias[index].totalFinal;
    }
    this.valorComprasDiariamente = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.valorComprasDiariamente);

    await this._api.obterComprasFaturadasMes().then((data) => {
      this.comprasMensais = data;
    });
    for (let index = 0; index < this.comprasMensais.length; index++) {
      this.valorComprasMensais =
        this.valorComprasMensais + this.comprasMensais[index].totalFinal;
    }
    this.valorComprasMensais = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.valorComprasMensais);

    await this._api.obterComprasFaturadasAno().then((data) => {
      this.comprasAnuais = data;
    });
    for (let index = 0; index < this.comprasAnuais.length; index++) {
      this.valorComprasAnuais =
        this.valorComprasAnuais + this.comprasAnuais[index].totalFinal;
    }
    this.valorComprasAnuais = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.valorComprasAnuais);

    await this._api.obterComprasFaturadasMesByID(1).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes1 = this.mes1 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(2).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes2 = this.mes2 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(3).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes3 = this.mes3 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(4).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes4 = this.mes4 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(5).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes5 = this.mes5 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(6).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes6 = this.mes6 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(7).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes7 = this.mes7 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(8).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes8 = this.mes8 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(9).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes9 = this.mes9 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(10).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes10 = this.mes10 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(11).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes11 = this.mes11 + data[index].totalFinal;
      }
    });
    await this._api.obterComprasFaturadasMesByID(12).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes12 = this.mes12 + data[index].totalFinal;
      }
    });

    this.chartOptions.series = [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: [
          this.mes1,
          this.mes2,
          this.mes3,
          this.mes4,
          this.mes5,
          this.mes6,
          this.mes7,
          this.mes8,
          this.mes9,
          this.mes10,
          this.mes11,
          this.mes12,
        ],
        type: 'spline',
        color: '#000',
      },
    ];
    this.updateFlag = true;

    //TODO: Produtos mês//
    this._api.obterComprasProdutosMesByID(mes + 1).then((data: any) => {
      this.maioresProdutos = this._counter.findOcc(data, 'produtoID');
      this.maioresProdutos = this.maioresProdutos.sort();

      let d: any[] = [];
      for (let index = 0; index < this.maioresProdutos.length; index++) {
        d.push(this.maioresProdutos[index].ocorrencias);
      }

      let descricao: any[] = [];
      for (let index = 0; index < this.maioresProdutos.length; index++) {
        this._product
          .obterDadosProdutosPeloID(this.maioresProdutos[index].produtoID)
          .then((data: any) => {
            descricao.push(data.descricao);
          });
      }

      descricao.reverse();

      setTimeout(() => {
        this.chartOptionsMaioresProdutosMes.series = [
          {
            showInLegend: false,
            marker: { enabled: false },
            data: d,
            type: 'spline',
            color: '#000',
          },
        ];
        this.chartOptionsMaioresProdutosMes.xAxis = [
          {
            categories: descricao,
          },
        ];
        this.updateFlagMaioresProdutosMes = true;
      }, 1000);

      console.log(this.maioresProdutos);
    });

    //TODO: Produtos ano//
    this._api.obterComprasProdutosAno().then((data: any) => {
      this.maioresProdutosAno = this._counter.findOcc(data, 'produtoID');
      this.maioresProdutosAno = this.maioresProdutosAno.sort();

      let d: any[] = [];
      for (let index = 0; index < this.maioresProdutosAno.length; index++) {
        d.push(this.maioresProdutosAno[index].ocorrencias);
      }

      let descricao: any[] = [];
      for (let index = 0; index < this.maioresProdutosAno.length; index++) {
        this._product
          .obterDadosProdutosPeloID(this.maioresProdutosAno[index].produtoID)
          .then((data: any) => {
            descricao.push(data.descricao);
          });
      }

      descricao.reverse();

      setTimeout(() => {
        this.chartOptionsMaioresProdutosAnual.series = [
          {
            showInLegend: false,
            marker: { enabled: false },
            data: d,
            type: 'spline',
            color: '#000',
          },
        ];
        this.chartOptionsMaioresProdutosAnual.xAxis = [
          {
            categories: descricao,
          },
        ];
        this.updateFlagMaioresProdutosAnual = true;
      }, 1000);
    });

    //TODO: Produtos Top Fornecedores ano//
    //TODO: Produtos Top Compradores ano//
  }
}
