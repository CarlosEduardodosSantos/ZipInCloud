import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ZipincloudService } from 'src/app/services/api/zipincloud.service';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-regimetributario-exibir',
  templateUrl: './regimetributario-exibir.component.html',
  styleUrls: ['./regimetributario-exibir.component.scss'],
})
export class RegimetributarioExibirComponent implements OnInit {
  @Output() regimeTributarioId: EventEmitter<number> =
    new EventEmitter<number>();

  rtLista: any[] = [
    { id: 1, nome: 'Simples' },
    { id: 2, nome: 'Simples com Exc.Rec.Bruta' },
    { id: 3, nome: 'Normal' },
  ];
  faCubes = faCubes;

  constructor(private _api: ZipincloudService) {}

  ngOnInit() {}

  onSubmitRTEmpresa(data: any) {
    this.regimeTributarioId.emit(data);
  }
}
