import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';

@Component({
  selector: 'app-endereco-criar',
  templateUrl: './endereco-criar.component.html',
  styleUrls: ['./endereco-criar.component.scss'],
})
export class EnderecoCriarComponent implements OnInit {
  unidadeFederativaDados: any = { descricao: '' };
  idUFEmpresa: any = 0;
  codigoEstadual: any = 0;

  constructor(private _api: ZipincloudService) {}

  ngOnInit(): void {}

  salvarIdUFEmpresa(num: any) {
    this.idUFEmpresa = num;

    this._api.obterTodosEstadosUFByID(this.idUFEmpresa).then((res) => {
      this.unidadeFederativaDados = res;
      this.codigoEstadual = this.unidadeFederativaDados.codigo;
    });
  }

  async onSubmitCadastro(data: any) {
    console.log(data);

    /* await this._api.salvarCategoria(data); */
  }
}
