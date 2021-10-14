import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-categorias-criar',
  templateUrl: './categorias-criar.component.html',
  styleUrls: ['./categorias-criar.component.scss'],
})
export class CategoriasCriarComponent implements OnInit {
  imageBinding: any = '/assets/semimagem.jpg';
  base64: any;

  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  async adicionarImagem(data: any) {
    this.toBase64(data.files[0]);
  }

  async onSubmitCadastro(data: any) {
    data.imagem = data.imagem.replace(/^data:image\/[a-z]+;base64,/, '');
    console.log(data);
    await this._api.salvarCategoria(data);
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
