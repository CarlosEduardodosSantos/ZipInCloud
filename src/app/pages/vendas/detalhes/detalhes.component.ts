import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZipincloudService } from '../../../services/api/zipincloud.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  id: any;
  fromRoute: any;

  dados: any;
  horario: any;

  constructor(private route: ActivatedRoute, private _api: ZipincloudService) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fromRoute = this.route.snapshot.paramMap.get('initialRoute');

    await this._api
      .obterTodosDadosMovEstoqueVendasPeloID(this.id)
      .then((data) => {
        this.dados = data;
      });

    this.setHorario();

    console.log(this.horario);
    console.log(this.dados);
  }

  setHorario() {
    this.horario =
      this.dados[2].data[8] +
      this.dados[2].data[9] +
      '/' +
      this.dados[2].data[5] +
      this.dados[2].data[6] +
      '/' +
      this.dados[2].data[0] +
      this.dados[2].data[1] +
      this.dados[2].data[2] +
      this.dados[2].data[3] +
      '-' +
      this.dados[2].data[11] +
      this.dados[2].data[12] +
      this.dados[2].data[13] +
      this.dados[2].data[14] +
      this.dados[2].data[15] +
      this.dados[2].data[16] +
      this.dados[2].data[17] +
      this.dados[2].data[18];
  }
}
