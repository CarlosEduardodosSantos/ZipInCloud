import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-marcas-modificar',
  templateUrl: './marcas-modificar.component.html',
  styleUrls: ['./marcas-modificar.component.scss'],
})
export class MarcasModificarComponent implements OnInit {
  @Input() marcaAtual: any;
  @Input() idAtual: any;

  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async onSubmitConfiguracao(data: any) {
    console.log(data);
    await this._api.modificarMarca(data);
    location.reload();
  }
}
