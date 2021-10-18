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
  dadosVenda: any;
  dadosVendedor: any;

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
              console.log(this.dados);
              console.log(this.dadosVenda);
              console.log(this.dadosVendedor);
            });
        });
    });
  }

  retornar() {
    if (this.fromRoute == 1) {
      location.href = '/vendas';
    } else if (this.fromRoute == 2) {
      location.href = '/produtos';
    }
  }
}
