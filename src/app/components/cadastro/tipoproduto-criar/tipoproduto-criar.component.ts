import { Component, OnInit } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-tipoproduto-criar',
  templateUrl: './tipoproduto-criar.component.html',
  styleUrls: ['./tipoproduto-criar.component.scss'],
})
export class TipoprodutoCriarComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async onSubmitCadastro(data: any) {
    console.log(data);
    await this._api.salvarTipoProduto(data);
    location.reload();
  }
}
