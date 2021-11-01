import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DashboardsService } from 'src/app/services/api/dashboards.service';
import { faMoneyBill, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { CounterService } from 'src/app/services/utilitarios/counter.service';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  faMoneyBill = faMoneyBill;
  faCreditCard = faCreditCard;
  placeholder: any = 'R$0,00';

  maioresProdutos: any[] = [];
  maioresProdutosAno: any[] = [];

  HighchartsMaioresProdutosMes: typeof Highcharts = Highcharts;
  HighchartsMaioresProdutosAnual: typeof Highcharts = Highcharts;

  updateFlagMaioresProdutosMes = false;
  updateFlagMaioresProdutosAnual = false;

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
    title: { text: 'NFES ANUAL' },
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
    title: { text: 'NFES ANUAL CANCELADAS' },
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

  constructor(
    private _api: DashboardsService,
    private _product: ZipincloudService,
    private _counter: CounterService
  ) {}

  async ngOnInit() {}
}
