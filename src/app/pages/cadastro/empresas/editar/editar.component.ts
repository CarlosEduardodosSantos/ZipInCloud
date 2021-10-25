import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { ZipincloudService } from '../../../../services/api/zipincloud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  dadosAnteriores: any;
  imagemImpressoao: any;

  idGrupoEmpresa: any;
  grupoEmpresaDados: any;

  idRTEmpresa: any;
  rtDados: any = { Nome: '' };

  idUFEmpresa: any;
  codigoEstadual: any;
  unidadeFederativaDados: any = { descricao: '' };

  idMunicipioEmpresa: any;
  municipioDados: any = { descricao: '' };

  empresaDados: any = { nome: '' };

  imageBinding = '../../../../../assets/semimagem.jpg';
  imageImpressoaoBinding = '../../../../../assets/semimagem.jpg';
  imagePropragandaPDV1Binding = '../../../../../assets/semimagem.jpg';
  imagePropragandaPDV2Binding = '../../../../../assets/semimagem.jpg';

  constructor(private _api: ZipincloudService, private route: ActivatedRoute) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this._api.obterEmpresaByID(id).then((data: any) => {
      this.dadosAnteriores = data;

      this.salvarIdGrupoEmpresa(this.dadosAnteriores.grupoEmpresaID);
      this.salvarIdRTEmpresa(this.dadosAnteriores.regimeTributarioID);
      this.salvarIdUFEmpresa(this.dadosAnteriores.unidadeFederativaID);

      this.imagemImpressoao = this.dadosAnteriores.imagemImpressoão;
      console.log(this.dadosAnteriores);
    });
  }

  adicionarImagem(data: any) {
    this.toBase64(data.files[0], 1);
  }

  adicionarImagemImpressoao(data: any) {
    this.toBase64(data.files[0], 2);
  }

  adicionarImagemPropPDV1(data: any) {
    this.toBase64(data.files[0], 3);
  }

  adicionarImagemPropPDV2(data: any) {
    this.toBase64(data.files[0], 4);
  }

  salvarIdGrupoEmpresa(num: any) {
    this.idGrupoEmpresa = num;

    this._api.obterGrupoEmpresaByID(this.idGrupoEmpresa).then((data) => {
      this.empresaDados = data;
    });
  }

  salvarIdRTEmpresa(num: any) {
    this.idRTEmpresa = num;

    this.idRTEmpresa === 1 ? (this.rtDados = { Nome: 'Simples' }) : '';
    this.idRTEmpresa === 2
      ? (this.rtDados = { Nome: 'Simples com Exc.Rec.Bruta' })
      : '';
    this.idRTEmpresa === 3 ? (this.rtDados = { Nome: 'Normal' }) : '';
  }

  salvarIdUFEmpresa(num: any) {
    this.idUFEmpresa = num;

    this._api.obterTodosEstadosUFByID(this.idUFEmpresa).then((res) => {
      this.unidadeFederativaDados = res;
      this.codigoEstadual = this.unidadeFederativaDados.codigo;
      this.salvarIdMunicipioEmpresa(this.dadosAnteriores.municipioID);
    });
  }

  salvarIdMunicipioEmpresa(num: any) {
    this.idMunicipioEmpresa = num;

    this._api
      .obterMunicipioByID(this.codigoEstadual, this.idMunicipioEmpresa)
      .then((res) => {
        this.municipioDados = res;
      });
  }

  async onSubmit(data: any) {
    data.ImagemLogo = data.ImagemLogo.replace(
      /^data:image\/[a-z]+;base64,/,
      ''
    );
    data.ImagemLogo[0] != '/' ? delete data.ImagemLogo : '';

    data.ImagemImpressoão = data.ImagemImpressoão.replace(
      /^data:image\/[a-z]+;base64,/,
      ''
    );
    data.ImagemImpressoão[0] != '/' ? delete data.ImagemImpressoão : '';

    data.ImagemPropragandaPDV1 = data.ImagemPropragandaPDV1.replace(
      /^data:image\/[a-z]+;base64,/,
      ''
    );
    data.ImagemPropragandaPDV1[0] != '/'
      ? delete data.ImagemPropragandaPDV1
      : '';

    data.ImagemPropragandaPDV2 = data.ImagemPropragandaPDV2.replace(
      /^data:image\/[a-z]+;base64,/,
      ''
    );
    data.ImagemPropragandaPDV2[0] != '/'
      ? delete data.ImagemPropragandaPDV2
      : '';

    data.GrupoEmpresaID = this.idGrupoEmpresa;
    data.RegimeTributarioID = this.idRTEmpresa;
    data.UnidadeFederativaID = this.idUFEmpresa;
    data.MunicipioID = this.municipioDados.id;
    console.log(data);

    /* await this._api.modificarEmpresa(data); */
  }

  retornar() {
    location.href = '/cadastro/empresas';
  }

  //TODO:BASE64CONVERT//
  toBase64(file: File, orig: any) {
    const obs = new Observable((sub: Subscriber<any>) => {
      this.readFile(file, sub);
    });
    obs.subscribe((d) => {
      orig === 1 ? (this.imageBinding = d) : '';
      orig === 2 ? (this.imageImpressoaoBinding = d) : '';
      orig === 3 ? (this.imagePropragandaPDV1Binding = d) : '';
      orig === 4 ? (this.imagePropragandaPDV2Binding = d) : '';
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
