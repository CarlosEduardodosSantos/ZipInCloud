import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  alertSuccessState = true;

  constructor(private _api: ZipincloudService) {}

  async ngOnInit() {}

  async onSubmit(data: any) {
    console.log(data);
    await this._api.salvarNcm(data);
    this.alertSuccessState = false;
    setTimeout(() => {
      this.alertSuccessState = true;
    }, 3000);
  }
}
