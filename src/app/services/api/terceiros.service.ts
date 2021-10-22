import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TerceirosService {
  constructor(public http: HttpClient) {}

  //TODO:VIACEP//
  obterDadosEnderecoByCEP(cep: any) {
    console.log(cep);
    return this.http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }
}
