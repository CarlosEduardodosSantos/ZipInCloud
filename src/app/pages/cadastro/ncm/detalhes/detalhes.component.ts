import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  ncmDados: any;

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    await this._api.obterDadosNcmPeloID(id).then((data) => {
      this.ncmDados = data;
      console.log(this.ncmDados);
    });
  }

  async onSubmit(data: any) {
    console.log(data);
    await this._api.modificarNcm(data);
  }
}
