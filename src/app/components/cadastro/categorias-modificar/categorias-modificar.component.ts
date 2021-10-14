import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-categorias-modificar',
  templateUrl: './categorias-modificar.component.html',
  styleUrls: ['./categorias-modificar.component.scss'],
})
export class CategoriasModificarComponent implements OnInit {
  @Input() descricaoAtual: any;
  @Input() idAtual: any;

  imageBinding: any = '/assets/semimagem.jpg';

  constructor(
    private _api: ZipincloudService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  async adicionarImagem(data: any) {
    this.toBase64(data.files[0]);
  }

  async onSubmitConfiguracao(data: any) {
    data.imagem = data.imagem.replace(/^data:image\/[a-z]+;base64,/, '');
    console.log(data);
    await this._api.modificarCategoria(data);
    location.reload();
  }

  //TODO:BASE64CONVERT//
  toBase64(file: File) {
    const obs = new Observable((sub: Subscriber<any>) => {
      this.readFile(file, sub);
    });
    obs.subscribe((d) => {
      this.imageBinding = d;
    });
  }

  readFile(file: File, sub: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      sub.next(filereader.result);
      sub.complete();
    };
    filereader.onerror = (err: any) => {
      sub.error(err);
      sub.complete();
    };
  }
}
