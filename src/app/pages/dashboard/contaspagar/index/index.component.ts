import { Component, OnInit } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { DashboardsService } from 'src/app/services/api/dashboards.service';
import * as Highcharts from 'highcharts';
import { CounterService } from 'src/app/services/utilitarios/counter.service';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  faMoneyBill = faMoneyBill;

  mes1baixado: any = 0;
  mes2baixado: any = 0;
  mes3baixado: any = 0;
  mes4baixado: any = 0;
  mes5baixado: any = 0;
  mes6baixado: any = 0;
  mes7baixado: any = 0;
  mes8baixado: any = 0;
  mes9baixado: any = 0;
  mes10baixado: any = 0;
  mes11baixado: any = 0;
  mes12baixado: any = 0;

  mes1aberto: any = 0;
  mes2aberto: any = 0;
  mes3aberto: any = 0;
  mes4aberto: any = 0;
  mes5aberto: any = 0;
  mes6aberto: any = 0;
  mes7aberto: any = 0;
  mes8aberto: any = 0;
  mes9aberto: any = 0;
  mes10aberto: any = 0;
  mes11aberto: any = 0;
  mes12aberto: any = 0;

  valorVendasDiaRecebidas: any = 0;
  valorVendasMesRecebidas: any = 0;
  valorVendasAnoRecebidas: any = 0;
  valorVendasDiaAbertas: any = 0;
  valorVendasMesAbertas: any = 0;
  valorVendasAnoAbertas: any = 0;

  HighchartsMesBaixado: typeof Highcharts = Highcharts;

  chartOptionsMesBaixado: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['Carregando'],
        type: 'column',
        color: '#7ae2e2',
        borderColor: '#22cece',
      },
    ],
    title: { text: 'Anual - Baixado' },
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

  updateFlagMesBaixado = false;

  HighchartsMesAberto: typeof Highcharts = Highcharts;

  chartOptionsMesAberto: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['Carregando'],
        type: 'column',
        color: '#7ae2e2',
        borderColor: '#22cece',
      },
    ],
    title: { text: 'Anual - Aberto' },
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

  updateFlagMesAberto = false;

  HighchartsMesCategoriaBaixado: typeof Highcharts = Highcharts;

  chartOptionsMesCategoriaBaixado: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['Carregando'],
        type: 'column',
        color: '#7ae2e2',
        borderColor: '#22cece',
      },
    ],
    title: { text: 'Categorias Anual - Baixado' },
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

  updateFlagMesCategoriaBaixado = false;

  HighchartsMesCategoriaAberto: typeof Highcharts = Highcharts;

  chartOptionsMesCategoriaAberto: Highcharts.Options = {
    series: [
      {
        showInLegend: false,
        marker: { enabled: false },
        data: ['Carregando'],
        type: 'column',
        color: '#7ae2e2',
        borderColor: '#22cece',
      },
    ],
    title: { text: 'Categorias Anual - Aberto' },
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

  updateFlagMesCategoriaAberto = false;

  constructor(
    private _api: DashboardsService,
    private _counter: CounterService,
    private _product: ZipincloudService
  ) {}

  async ngOnInit() {
    this._api.obterContasAPagarHojeRecebido().then((res: any) => {
      for (let index = 0; index < res.length; index++) {
        this.valorVendasDiaRecebidas =
          this.valorVendasDiaRecebidas + res[index].saldo;
      }
      this.valorVendasDiaRecebidas = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.valorVendasDiaRecebidas);
    });
    this._api.obterContasAPagarMesRecebido().then((res: any) => {
      for (let index = 0; index < res.length; index++) {
        this.valorVendasMesRecebidas =
          this.valorVendasMesRecebidas + res[index].saldo;
      }
      this.valorVendasMesRecebidas = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.valorVendasMesRecebidas);
    });
    this._api.obterContasAPagarAnoRecebido().then((res: any) => {
      for (let index = 0; index < res.length; index++) {
        this.valorVendasAnoRecebidas =
          this.valorVendasAnoRecebidas + res[index].saldo;
      }
      this.valorVendasAnoRecebidas = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.valorVendasAnoRecebidas);
    });

    this._api.obterContasAPagarHojeAberto().then((res: any) => {
      for (let index = 0; index < res.length; index++) {
        this.valorVendasDiaAbertas =
          this.valorVendasDiaAbertas + res[index].saldo;
      }
      this.valorVendasDiaAbertas = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.valorVendasDiaAbertas);
    });
    this._api.obterContasAPagarMesAberto().then((res: any) => {
      for (let index = 0; index < res.length; index++) {
        this.valorVendasMesAbertas =
          this.valorVendasMesAbertas + res[index].saldo;
      }
      this.valorVendasMesAbertas = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.valorVendasMesAbertas);
    });
    this._api.obterContasAPagarAnoAberto().then((res: any) => {
      for (let index = 0; index < res.length; index++) {
        this.valorVendasAnoAbertas =
          this.valorVendasAnoAbertas + res[index].saldo;
      }
      this.valorVendasAnoAbertas = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.valorVendasAnoAbertas);
    });

    await this._api.obterContasAPagarMesBaixadoByID(1).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes1baixado = this.mes1baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(2).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes2baixado = this.mes2baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(3).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes3baixado = this.mes3baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(4).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes4baixado = this.mes4baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(5).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes5baixado = this.mes5baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(6).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes6baixado = this.mes6baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(7).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes7baixado = this.mes7baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(8).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes8baixado = this.mes8baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(9).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes9baixado = this.mes9baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(10).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes10baixado = this.mes10baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(11).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes11baixado = this.mes11baixado + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesBaixadoByID(12).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes12baixado = this.mes12baixado + data[index].saldo;
      }
    });

    await this._api.obterContasAPagarMesAbertoByID(1).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes1aberto = this.mes1aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(2).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes2aberto = this.mes2aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(3).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes3aberto = this.mes3aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(4).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes4aberto = this.mes4aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(5).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes5aberto = this.mes5aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(6).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes6aberto = this.mes6aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(7).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes7aberto = this.mes7aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(8).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes8aberto = this.mes8aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(9).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes9aberto = this.mes9aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(10).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes10aberto = this.mes10aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(11).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes11aberto = this.mes11aberto + data[index].saldo;
      }
    });
    await this._api.obterContasAPagarMesAbertoByID(12).then((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.mes12aberto = this.mes12aberto + data[index].saldo;
      }
    });

    this.chartOptionsMesBaixado.series = [
      {
        showInLegend: false,
        marker: { enabled: true },
        data: [
          this.mes1baixado,
          this.mes2baixado,
          this.mes3baixado,
          this.mes4baixado,
          this.mes5baixado,
          this.mes6baixado,
          this.mes7baixado,
          this.mes8baixado,
          this.mes9baixado,
          this.mes10baixado,
          this.mes11baixado,
          this.mes12baixado,
        ],
        type: 'spline',
        color: '#148080',
      },
    ];
    this.updateFlagMesBaixado = true;

    this.chartOptionsMesAberto.series = [
      {
        showInLegend: false,
        marker: { enabled: true },
        data: [
          this.mes1aberto,
          this.mes2aberto,
          this.mes3aberto,
          this.mes4aberto,
          this.mes5aberto,
          this.mes6aberto,
          this.mes7aberto,
          this.mes8aberto,
          this.mes9aberto,
          this.mes10aberto,
          this.mes11aberto,
          this.mes12aberto,
        ],
        type: 'spline',
        color: '#148080',
      },
    ];
    this.updateFlagMesAberto = true;

    //TODO: Categoria Anual Baixado//
    this._api.obterContasAPagarMesCategoriaBaixadoByID().then((data: any) => {
      console.log(data);

      let categorias = this._counter.findOcc(data, 'categoriaDocumentoID');
      categorias = categorias.sort();

      console.log(categorias);

      let d: any[] = [];
      for (let index = 0; index < categorias.length; index++) {
        d.push(categorias[index].ocorrencias);
      }

      let descricao: any[] = [];
      for (let index = 0; index < categorias.length; index++) {
        this._product
          .obterCategoriaDocumentosByID(categorias[index].categoriaDocumentoID)
          .then((data: any) => {
            descricao.push(data.descricao);
          });
      }

      descricao.reverse();

      setTimeout(() => {
        this.chartOptionsMesCategoriaBaixado.series = [
          {
            showInLegend: false,
            marker: { enabled: false },
            data: d,
            type: 'column',
            color: '#7ae2e2',
            borderColor: '#1ba5a5',
          },
        ];
        this.chartOptionsMesCategoriaBaixado.xAxis = [
          {
            categories: descricao,
          },
        ];
        this.updateFlagMesCategoriaBaixado = true;
      }, 1000);
    });

    //TODO: Categoria Anual Aberto//
    this._api.obterContasAPagarMesCategoriaAbertoByID().then((data: any) => {
      let categorias = this._counter.findOcc2(data, 'categoriaDocumentoID');
      categorias = categorias.sort(function (a: any, b: any) {
        var keyA = new Date(a.ocorrencias),
          keyB = new Date(b.ocorrencias);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      categorias = categorias.reverse();
      console.log(categorias);

      let d: any[] = [];
      for (let index = 0; index < categorias.length; index++) {
        d.push({
          name: categorias[index].descricao,
          y: categorias[index].ocorrencias,
          z: 10,
        });
      }
      console.log(d);

      let descricao: any[] = [];
      for (let index = 0; index < categorias.length; index++) {
        descricao.push(categorias[index].descricao);
      }
      console.log(descricao);

      setTimeout(() => {
        this.chartOptionsMesCategoriaAberto.series = [
          {
            showInLegend: false,
            marker: { enabled: false },
            data: d,
            type: 'pie',
            color: '#7ae2e2',
            borderColor: '#1ba5a5',
          },
        ];
        this.chartOptionsMesCategoriaAberto.xAxis = [
          {
            categories: descricao,
          },
        ];
        this.updateFlagMesCategoriaAberto = true;
      }, 1000);
    });
  }
}
