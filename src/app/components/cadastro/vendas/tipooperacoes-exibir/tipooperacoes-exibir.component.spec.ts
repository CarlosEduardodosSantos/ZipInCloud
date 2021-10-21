import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipooperacoesExibirComponent } from './tipooperacoes-exibir.component';

describe('TipooperacoesExibirComponent', () => {
  let component: TipooperacoesExibirComponent;
  let fixture: ComponentFixture<TipooperacoesExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipooperacoesExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipooperacoesExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
