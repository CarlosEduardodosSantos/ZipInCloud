import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipooperacaoCompraExibirComponent } from './tipooperacao-compra-exibir.component';

describe('TipooperacaoCompraExibirComponent', () => {
  let component: TipooperacaoCompraExibirComponent;
  let fixture: ComponentFixture<TipooperacaoCompraExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipooperacaoCompraExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipooperacaoCompraExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
