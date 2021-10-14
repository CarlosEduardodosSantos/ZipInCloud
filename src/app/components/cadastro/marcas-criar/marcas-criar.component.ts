import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-marcas-criar',
  templateUrl: './marcas-criar.component.html',
  styleUrls: ['./marcas-criar.component.scss'],
})
export class MarcasCriarComponent implements OnInit {
  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async onSubmitCadastro(data: any) {
    console.log(data);
    await this._api.salvarMarca(data);
    location.reload();
  }
}
