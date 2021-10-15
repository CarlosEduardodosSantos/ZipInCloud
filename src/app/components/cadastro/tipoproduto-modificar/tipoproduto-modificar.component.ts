import { Component, OnInit, Input } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-tipoproduto-modificar',
  templateUrl: './tipoproduto-modificar.component.html',
  styleUrls: ['./tipoproduto-modificar.component.scss'],
})
export class TipoprodutoModificarComponent implements OnInit {
  @Input() tipoProdutoAtual: any;
  @Input() idAtual: any;

  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async onSubmitConfiguracao(data: any) {
    console.log(data);
    await this._api.modificarTipoProduto(data);
    location.reload();
  }
}
