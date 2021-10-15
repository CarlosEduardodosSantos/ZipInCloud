import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  alertSuccessState = true;

  ncmDados: any;

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    await this._api.obterDadosNcmPeloID(id).then((dados) => {
      this.ncmDados = dados[0];
    });
    console.log(this.ncmDados);
  }

  async onSubmit(data: any) {
    console.log(data);
    await this._api.modificarNcm(data);
    this.alertSuccessState = false;
    setTimeout(() => {
      this.alertSuccessState = true;
    }, 3000);
  }
}
