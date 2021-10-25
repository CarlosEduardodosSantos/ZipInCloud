import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acessorapido',
  templateUrl: './acessorapido.component.html',
  styleUrls: ['./acessorapido.component.scss'],
})
export class AcessorapidoComponent implements OnInit {
  @Input() nome: any;
  @Input() url: any;
  @Input() imageUrl: any;
  @Input() imageAlt: any;

  constructor() {}

  ngOnInit(): void {}
}
