import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SecurityContext,
} from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-categorias-modificar',
  templateUrl: './categorias-modificar.component.html',
  styleUrls: ['./categorias-modificar.component.scss'],
})
export class CategoriasModificarComponent implements OnInit {
  @Input() descricaoAtual: any;
  @Input() idAtual: any;
  @Input() img: any;
  @Output() outdata: EventEmitter<any> = new EventEmitter<any>();

  imageBinding: any = '/assets/semimagem.jpg';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    setInterval(() => {
      this.img = this.sanitizer.sanitize(SecurityContext.URL, this.img);
    }, 1000);
  }

  async adicionarImagem(data: any) {
    this.toBase64(data.files[0]);
  }

  async onSubmitConfiguracao(data: any) {
    data.Imagem = data.Imagem.replace(/^data:image\/[a-z]+;base64,/, '');
    if (
      data.Imagem[0] == 'h' &&
      data.Imagem[1] == 't' &&
      data.Imagem[2] == 't' &&
      data.Imagem[3] == 'p' &&
      (data.Imagem[4] == 's' || data.Imagem[4] == ':')
    ) {
      delete data.Imagem;
    } else {
      data.Imagem = this.img;
    }

    console.log(data);

    this.outdata.emit(data);
  }

  //TODO:BASE64CONVERT//
  toBase64(file: File) {
    const obs = new Observable((sub: Subscriber<any>) => {
      this.readFile(file, sub);
    });
    obs.subscribe((d) => {
      d = d.replace(/^data:image\/[a-z]+;base64,/, '');
      this.img = d;
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
