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
  faMoneyBill = faMoneyBill;
  placeholder: any = 'R$0,00';

  constructor(
    private _api: DashboardsService,
    private _product: ZipincloudService,
    private _counter: CounterService
  ) {}

  async ngOnInit() {}
}
